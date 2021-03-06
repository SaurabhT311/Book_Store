import React from "react";
import "./DisplayBook.scss";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import bookImg from "../../Assets/imagebook.jpg";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Pagination from "../Pagination/Pagination";
import * as action from '../Redux/actions/action';
import { connect, useDispatch, useSelector } from 'react-redux'
import Services from '../../Services/bookService'

const service = new Services()

const useStyles = makeStyles((theme) => ({
    bookName: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: "12px",
    },
    bookQuantity: {
        fontSize: "12px",
    },
    bookPrize: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    addToBagButton: {
        padding: "3px 4px 3px 4px",
        margin: "5px",
        width: "90px",
        height: "35px",
        fontSize: "11px",
        backgroundColor: "#A03037",
        color: "#ffff",
        borderRadius: "2px",
    },
    addedBagButton: {
        backgroundColor: "#1976D2",
        width: "170px",
        height: "40px",
        margin: "5px",
        color: "#ffff",
        borderRadius: "2px",
        fontSize: "13px",
    },
    ouOfStockButton: {
        backgroundColor: "#A9A9A9",
        width: "170px",
        height: "40px",
        margin: "5px",
        color: "black",
        borderRadius: "2px",
        fontSize: "13px",
    },
    wishListButton: {
        padding: "3px 4px 3px 4px",
        margin: "5px",
        width: "80px",
        height: "35px",
        fontSize: "13px",
        borderRadius: "2px",
        fontWeight: "bold",
    },

    optionSelect: {
        padding: "5px 5px",
    },
}));

// export default function DisplayBooks(props) {
    function DisplayBooks(props){
    const classes = useStyles();
    const [books, setBooks] = React.useState([]);
    const [data, setData] = React.useState(0);
    const [sort, setSort] = React.useState({ type: "" });
    const [postsPerPage] = React.useState(8);
    const [currentPage, setCurrentPage] = React.useState(1);

    React.useEffect(() => {
        props.getBooks();
    }, []);

    // React.useEffect(() => {
    //     getAllBooks();
    // }, []);

    // const getAllBooks = () => {
    //     service.getbook().then((result) => {
    //         console.log("data is ", data);
    //         setBooks(result.data.data);
    //         setData(result.data.data);
    //         books.map((result))
    //     }).catch((error) => {
    //         console.log("error");
    //     })
    // };


    const handleChange = (event) => {
        const name = event.target.name;
        setSort({
            ...sort,
            [name]: event.target.value,
        });
        console.log(sort.type);
        switch (sort.type) {
            case "0":
                setBooks(data);
                break;
            case "1":
                setBooks(books.sort((a, b) => (a.price > b.price ? -1 : 1)));
                setBooks(data);
                break;
            case "2":
                setBooks(books.sort((a, b) => (a.price > b.price ? 1 : -1)));
                setBooks(data);
                break;
        }
    };

    const addedToCart = (e, data) => {
        const id = data._id;
        console.log("id is", id)
        data.isCart = true;
        service.addToCart(id).then((result) => {
            props.allCartItem();
            console.log("Added Sucessfully in Cart", result);
        }).catch((error) => {
            console.log(error);
            console.log("error");
        })
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastBook = currentPage * postsPerPage;
    const indexOfFirstBook = indexOfLastBook - postsPerPage;
    const currentBooks = props.Books.books.slice(indexOfFirstBook, indexOfLastBook);
    console.log("index of first book",indexOfFirstBook);

    return (
        <div className="displayBook">
            <span className="topContent">
                <div>
                    Books <font className="bookSize"> ({books.length} items) </font>{" "}
                </div>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            className={classes.optionSelect}
                            native
                            value={sort.type}
                            onChange={handleChange}
                            inputProps={{
                                name: "type",
                            }}
                        >
                            <option value={0}>Sort by relevance</option>
                            <option value={1}>Price: low to high</option>
                            <option value={2}>Price: high to low</option>

                        </Select>
                    </FormControl>
                </div>
            </span>
            <div className="allBooks">
                {currentBooks.map((data) => (
                    <div className="bookContainer">

                        <div className="imageContainer">
                            <img className="bookImage" src={bookImg} alt="" />
                        </div>
                        <div className="infoContainer">
                            <Typography className={classes.bookName}>
                                {data.bookName}
                            </Typography>
                            <Typography className={classes.bookAuthor}>
                                {data.author}
                            </Typography>
                            <Typography className={classes.bookPrize}>
                                Rs. {data.price}
                            </Typography>
                        </div>
                        {data.isCart ? (
                            <Button variant="contained" className={classes.addedBagButton}>
                                Added To Cart
                            </Button>
                        ) : data.quantity == 0 ? (
                            <Button variant="contained" className={classes.ouOfStockButton}>
                                Out of Stock
                            </Button>
                        ) : (
                            <div className="buttonContainer">
                                <Button
                                    variant="contained"
                                    onClick={(e) => addedToCart(e, data)}
                                    className={classes.addToBagButton}
                                >
                                    Add to cart
                                </Button>
                                <Button variant="contained"
                                    className={classes.wishListButton}>
                                    WishList
                                </Button>
                            </div>
                        )}
                        <div className="descClass">
                            <Typography className={classes.bookName}>Book Details</Typography>
                            <Typography className={classes.bookName}>{data.bookName}</Typography>
                            {data.description}
                        </div>
                    </div>
                ))}
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={books.length}
                    paginate={paginate}
                ></Pagination>
            </div>
        </div>
    );
}

const mapDispatchToProps = (state) => {
    return state;
}

export default connect(mapDispatchToProps, action)(DisplayBooks);
