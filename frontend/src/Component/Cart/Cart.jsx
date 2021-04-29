import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import bookImg from "../../Assets/imagebook.jpg";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import "./Cart.scss";
import services from "../../Services/bookService"

const service = new services()


const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: "12px",
  },
  bookPrize: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  countInput: {
    border: "1px lightgray solid",
    width: "15%",
    height: "30px",
  },
  countButton: {
    height: "5px",
    margin: "5px",
    border: "1px solid lightgray",
    width: "5px",
  },
  placeButton: {
    height: "50px",
    position: "relative",
  },
  inputField: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    padding: "5px",
  },
  inputAdderss: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    padding: "5px",
    minHeight: "80px",
    minWidth: "200px",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const [books, setBooks] = useState();
  const [detailForm, setDetailForm] = useState(false);
  const [summaryField, setSummaryField] = useState(false);
  const [value, setValue] = useState("Home");

  const [name, setName] = useState();
  const [nameFlag, setNameFlag] = useState(false);
  const [nameError, setNameError] = useState("");

  const [mobile, setMobile] = useState();
  const [mobileFlag, setMobileFlag] = useState(false);
  const [mobileError, setMobileError] = useState("");

  const [address, setAddress] = useState();
  const [addressFlag, setAddressFlag] = useState(false);
  const [addressError, setAddressError] = useState("");

  const [city, setCity] = useState();
  const [cityFlag, setCityFlag] = useState(false);
  const [cityError, setCityError] = useState("");

  const [state, setState] = useState();
  const [stateFlag, setStateFlag] = useState(false);
  const [stateError, setStateError] = useState("");

  
  const [pincode, setPincode] = useState();
  const [pincodeFlag, setPincodeFlag] = useState(false);
  const [pincodeError, setPincodeError] = useState("");
  const [count, setCount] = useState(1);

  const initialState = () => {
    setNameFlag(false);
    setNameError("");

    setMobileFlag(false);
    setMobileError("");

    setPincodeFlag(false);
    setPincodeError("");
  
    setAddressFlag(false);
    setAddressError("");

    setCityFlag(false);
    setCityError("");

    setStateFlag(false);
    setStateError("");
  };



  const validationCheck = () => {
    initialState();
    const namePattern = /[a-zA-Z][a-zA-Z ]*/;
    const mobilePattern = /^[0-9]{10}$/;
    const pincodePattern = /^[0-9]{6}$/
    const addressPattern = /[a-zA-Z][a-zA-Z ]*/;
    const cityPattern = /^[A-Za-z ]{3,}$/;
    const statePattern = /^[A-Za-z ]{3,}$/;

    let isError = false;

    if (!namePattern.test(name) || name == undefined) {
      setNameFlag(true);
      setNameError("Enter valid full name");
      isError = true;
    }
    if (!mobilePattern.test(mobile)) {
      setMobileFlag(true);
      setMobileError("Enter valid mobile number");
      isError = true;
    }
  
    if (!addressPattern.test(address) || address == undefined) {
      setAddressFlag(true);
      setAddressError("Enter full valid address");
      isError = true;
    }
    if (!cityPattern.test(city) || city == undefined) {
      setCityFlag(true);
      setCityError("Enter your city");
      isError = true;
    }
    if (!statePattern.test(state) || state == undefined) {
      setStateFlag(true);
      setStateError("Enter your state");
      isError = true;
    }

    if (!pincodePattern.test(pincode)) {
      console.log('Pinncode not matched with pattern')
      setPincodeFlag(true);
      setPincodeError("Enter valid pincode");
      isError = true;
    }

    console.log(
      "fullname : " + name + "\n" + " mobile : " + mobile + "\n" + " address : " + address + "\n" + " city : " + city + "\n" + " state : " + state + "\n" + " pincode : " + pincode + "\n"

    );
    return isError;
  };

  const Continue = () => {
    if (validationCheck()) {
      console.log("Error Occured");
    } else {
      console.log("Success");
      setSummaryField(true);

    }
  };

  const deleteItem = (e, data) => {
    e.stopPropagation();
    let id=data._id;
    service.removeCartItem(id).then((data) => {
      console.log("Successfully deleted", data);
      props.allCartItem();
    }).catch((error) => {
      console.log("error" + error)
    })
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const AddingQuantity = (data) => {
    console.log('data : ', data)
    console.log("cart item ID", data._id)
    console.log("quantity", count)

    let quantityToBuy = {
      "quantity": count
    }
    console.log("quantityToBuy", quantityToBuy)
    service.updateCartItem(quantityToBuy, data._id).then((data) => {
      props.allCartItem();
    }).catch((err) => {
      console.log("Error while adding the quantity" + err)
    })
  }


  const IncreaseQuantity = (data) => {
    console.log('data in handleIncrement : ', data)
    setCount(count => count + 1);
    AddingQuantity(data)

  };


  const DecreaseQuantity = (data) => {
    console.log('data: ', data)
    console.log("books in cart", props.cartBooks)
    setCount(count => count - 1);
    AddingQuantity(data)
  };

  const CartBooks = () => {
    return (
      <div className="cartItem">
        {props.cartBooks.map((data) => (
          <div className="cartBookItem">
            <img className="cartBookImage" src={bookImg} alt="" />
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.book_ID.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.book_ID.author}
              </Typography>
              <Typography className={classes.bookPrize}>
                Rs. {data.book_ID.price}
              </Typography>
              <div className="countItem">
                <IconButton
                  className={classes.countButton}
                  onClick={(e) => { DecreaseQuantity(data) }}>-</IconButton>
                <h4>{count}</h4>
                <IconButton
                  className={classes.countButton}
                  onClick={(e) => { IncreaseQuantity(data) }}>+</IconButton>
                <Button onClick={(e) => { deleteItem(e, data) }}>Remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CheckoutItem = () => {
    return (
      <div className="cartItem">
        {props.cartBooks.map((data) => (
          <div className="cartBookItem">
            <img className="cartBookImage" src={bookImg} alt="" />
            <div className="infoContainer">
              <Typography className={classes.bookName}>
                {data.book_ID.bookName}
              </Typography>
              <Typography className={classes.bookAuthor}>
                {data.book_ID.author}
              </Typography>

              <Typography className={classes.bookPrize}>
                Rs. {data.book_ID.price * data.quantity}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const checkout = (e) => {

    let customersData = {
      fullName: name,
      mobile: mobile,
      pincode: pincode,
      address: address,
      city: city,
      state: state,
      addresstype: value
    }

    service.customerDetails(customersData).then((data) => {
      console.log('Adding data for customer : ', data)
    }).catch((error) => {
      console.log('error', error)
    })
    let order = [];
    props.cartBooks.map((data) => {
      console.log('cartBooks data : ', data)
      let order_ID = numeric_unique()
      console.log('order_ID : ', order_ID)
      localStorage.setItem("order_ID", order_ID);
      let same = {
        book_ID: data.book_ID._id,
        quantity: data.quantity,
        order_ID: order_ID
      };
      console.log('same : ', same.book_ID)
      order.push(same);
    });
    let orderData = {
      orders: order,
    };
    console.log('orderData : ', orderData);
    service.placeOrder(orderData).then((data) => {
      console.log("Successfully order Placed", data);
      props.setOrderPlaced(data);
      props.nextPath(e, "../dashboard/orderPlaced");
    }).catch((error) => {
      console.log("Error occured while placing order" + error);
    })

    props.cartBooks.map((book) => deleteItem(e, book));
  };


  function numeric_unique() {
    let uniqueNumber = Math.floor(Math.random() * 10000000000);
    var str1 = "Order_ID(";
    var str2 = uniqueNumber;
    var str3 = ")";
    var res = str1.concat(str2, str3);
    console.log('res : ', res)
    return res;
  }

  return (
    <div className="cartBody">
      <div className="cartContainer">
        My Cart ({props.cartBooks.length})
        <CartBooks />
        {detailForm ? (
          ""
        ) : (
          <div className="blockButton">
            <Button
            size="small"
              variant="contained"
              color="primary"
              className={classes.placeButton}
              onClick={() => setDetailForm(true)}
            >
              PLACE ORDER
            </Button>
          </div>
        )}
      </div>
      <div className="cartContainer">
        Customer Details
        {detailForm ? (
          <>
            <span className="inlineField">
              <div className="inputField">

                <TextField
                  value={name}
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  error={nameFlag}
                  helperText={nameError}
                  fullWidth
                  className={classes.input}
                  label="Full Name"
                />
              </div>

              <div className="inputField">
                <TextField
                  value={mobile}
                  variant="outlined"
                  onChange={(e) => setMobile(e.target.value)}
                  error={mobileFlag}
                  helperText={mobileError}
                  fullWidth
                  className={classes.input}
                  type="number"
                  label="Mobile Number"
                />
              </div>
            </span>

            <span className="inlineFieldadd">
              <div className="inputAdderssField">

                <TextField
                  value={address}
                  variant="outlined"
                  onChange={(e) => setAddress(e.target.value)}
                  error={addressFlag}
                  helperText={addressError}
                  fullWidth
                  multiline
                  className={classes.inputAddress}
                  label="Address"
                />
              </div>
            </span>

            <span className="inlineField">
              <div className="inputField">
                <TextField
                  value={city}
                  variant="outlined"
                  onChange={(e) => setCity(e.target.value)}
                  error={cityFlag}
                  helperText={cityError}
                  fullWidth
                  className={classes.input}
                  label="City/Town"
                />
              </div>
              <div className="inputField">

                <TextField
                  value={state}
                  variant="outlined"
                  onChange={(e) => setState(e.target.value)}
                  error={stateFlag}
                  helperText={stateError}
                  fullWidth
                  className={classes.input}
                  label="State"
                />
              </div>
            </span>

            <span className="inlineField">
              <div className="inputField">
                <TextField
                  value={pincode}
                  variant="outlined"
                  onChange={(e) => setPincode(e.target.value)}
                  error={pincodeFlag}
                  helperText={pincodeError}
                  fullWidth
                  className={classes.input}
                  type="number"
                  label="Pincode"
                />
              </div>
            </span>

           
            {summaryField ? (
              ""
            ) : (
              <div className="blockButton">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.placeButton}
                  onClick={Continue}
                >
                  CONTINUE
                </Button>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="cartContainer">
        Order Summary
        {summaryField ? (
          <>
            <CheckoutItem />
            <div className="blockButton">
              <Button
                variant="contained"
                color="primary"
                onClick={checkout}
                className={classes.placeButton}
              >
                CHECKOUT
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}