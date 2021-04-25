// import React from 'react';
// import { makeStyles, Theme, } from '@material-ui/core/styles';
// // import { withStyles } from "@material-ui/core/styles";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import logo from '../../Assets/education.svg';
// import SearchIcon from '@material-ui/icons/Search';
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Fade from "@material-ui/core/Fade";
// import Button from '@material-ui/core/Button';
// import { Avatar } from "@material-ui/core";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import './BookHeader.scss';


// const useStyles = makeStyles((theme) => ({

//     AppBar: {
//         backgroundColor: "#A03037"
//     },

//     grow: {
//         flexGrow: 1,
//         // display: "flex",
//         // justifyContent: "flex-start",

//     },

//     toolbar: {
//         display: "flex",
//         justifyContent: "space-around"
//     },

//     leftHeader:{
//         display: "flex",
//         // width: "50%",
//         // justifyContent: "space-around",
//         // alignItems: "center",
//         // flexDirection:"row"
//     },

//     rightHeader: {
//         display: "flex",
//         alignItems: "center",
//         // marginLeft: "50px"

//     },

   

//     // title: {
//     //     display: 'flex',
//     //     position: "relative",
//     //     left: "70px",
//     //     [theme.breakpoints.up('sm')]: {
//     //         marginLeft: theme.spacing(2),
//     //         display: 'block',
//     //     },
//     // },

//     search: {
//         position: "relative",
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: "#ffffff",
//         display: "flex",
//         justifyContent: "flex-start",
//         color: "gray",
//         height: "40px",
//         marginRight: theme.spacing(2),
//         marginLeft: "100px",
//         width: "60%",
//         [theme.breakpoints.down("xs")]: {
//             display: "none",
//         },
//     },
//     title: {
//         display: "flex",
//         flexDirection: "row",
//         [theme.breakpoints.down("xs")]: {
//             justifyContent: "flex-start",
//         },
//     },
    
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: "center",
//         color: "gray",
//     },

//     inputRoot: {
//         // width: "450px",
//         // position: "relative",
//         color:"inherit",

//     },
//     buttonSearch: {
//         display: "none",
//         [theme.breakpoints.down("xs")]: {
//             display: "block",
//             marginRight: "20px",
//         },
//     },

//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("md")]: {
//             width: "20ch",
//         },
//     },

//     storeLogo: {
//         marginLeft: "-60px",
//     },
   
//     titleName: {
//         marginRight: "40px",
//         cursor: 'pointer',
//         alignItems:"center"
//     },

//     cartButton: {
//         display: "flex",
//         flexDirection: "column",
//         fontSize: "14px",
//         color: "white",
//     },

//     name: {
//         display: "flex",
//         flexDirection: "column",
//     },
   
   
    
// }),
// );

// export default function BookDash() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState();
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState();
//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };


//     return (
//         <AppBar className={classes.AppBar}>
//             <div className={classes.grow}>
//                 <Toolbar className={classes.toolbar}>
//                 <div className={classes.leftHeaders}>
//                 <div className={classes.title}>
//                     <img className={classes.storeLogo} src={logo} />
//                     <div className={classes.titleName}>
//                         <Typography variant="h6" noWrap>
//                             Bookstore
//                             </Typography>
//                     </div>
//                     </div>


//                     <div className={classes.search}>
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>

//                         <InputBase
//                             placeholder="Search"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }} />
//                     </div>
//                 </div>
//                     {/* <div className={classes.grow} /> */}
//                         <div className={classes.rightHeader}>
//                         <SearchIcon className={classes.buttonSearch} />

//                         <IconButton

//                             className={classes.cartButton}>
//                             <PermIdentityIcon
//                                 aria-label="account of current user"
//                                 aria-haspopup="true"
//                                 onClick={handleProfileMenuOpen}
//                             >
//                             </PermIdentityIcon>
//                             <Menu

//                                 id="fade-menu"
//                                 anchorEl={anchorEl}
//                                 keepMounted
//                                 // open={open}
//                                 // onClose={handleClose}
//                                 TransitionComponent={Fade}
//                             >


//                                 <MenuItem>
//                                     <div className="avatarContainer">
//                                         <Avatar className="avatarIcon" alt='profile' />
//                                     </div>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     {localStorage.getItem("full Name")}
//                                 </MenuItem>
//                                 <MenuItem>
//                                     {localStorage.getItem("email")}
//                                 </MenuItem>
//                                 <MenuItem>
//                                     WishList
//                                 </MenuItem>

//                                 <MenuItem>
//                                     <Button
//                                         // onClick={HandleLogout}
//                                         variant="contained" style={{
//                                             fontWeight: 400,
//                                             backgroundColor: "light-blue",
//                                         }}
//                                     >Sign Out
//                                      </Button>
//                                 </MenuItem>
//                             </Menu>
//                             <span className={classes.name}>Profile</span>
//                         </IconButton>

//                         <IconButton
//                             className={classes.cartButton}>
//                             {/* <StyledBadge> */}
//                             <ShoppingCartOutlinedIcon />
//                             {/* </StyledBadge> */}
//                             <span>Cart</span>
//                         </IconButton>
//                         {/* <div className={classes.sectionMobile}>
//                             <IconButton
//                                 aria-label="show more"
//                                 // aria-controls={mobileMenuId}
//                                 aria-haspopup="true"
//                                 onClick={handleMobileMenuOpen}
//                                 color="inherit">
//                                      </IconButton>
//                         </div> */}
                               
//                     </div>
//                 </Toolbar>
//             </div>
//         </AppBar>
//     );
// }




import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import logo from "../../Assets/education.svg";
import IconButton from "@material-ui/core/IconButton";
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {withStyles} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {Avatar} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import './BookHeader.scss';
import {useHistory} from "react-router";



const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}))
(Badge);

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: "#A03037",
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-around",
    },

    leftHeader: {
        display: "flex",
        width: "50%",
        justifyContent: "space-around",
        alignItems: "center",
    },

    rightHeader: {
        display: "flex",
        alignItems: "center",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ffff",
        display: "flex",
        justifyContent: "flex-start",
        color: "gray",
        height: "40px",
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "70%",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    title: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-start",
        },
    },
    titleLogo: {
        marginRight: "10px",
    },

    titleName: {
        marginRight: "20px",
        cursor: 'pointer',
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        color: "gray",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inputRoot: {
        color: "inherit",
    },

    buttonSearch: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginRight: "20px",
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },

    cartButton: {
        display: "flex",
        flexDirection: "column",
        fontSize: "14px",
        color: "white",
    },

    name: {
        display: "flex",
        flexDirection: "column",
    },
}));

export default function BookHeader(props) {
    const classes = useStyles();
    const [input, setInput] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [books, setBooks] = React.useState([]);
    const [data, setData] = React.useState(0);
    const [hide, setHide] = React.useState(false);

    const open = Boolean(anchorEl);
    let history = useHistory();
    const searchItemfunc = (e, data) => {
        console.log('input : ', input)

    };

    const HandleLogout = (event) => {
        localStorage.clear();
        history.push("/book-store/login");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        setHide(!hide)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.leftHeader}>
                        <div className={classes.title}>
                            <img className={classes.titleLogo} src={logo} />
                            <Typography className={classes.titleName} variant="h6"
                                onClick={(e) => history.push("/dashBoard")}>
                                Bookstore
                             </Typography>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{ input: classes.inputInput }}
                                className={classes.input}
                                value={input}
                                onChange={(e) => { setInput(e.target.value) }}
                                onChange={(e) => { searchItemfunc(e, data) }} />
                        </div>
                    </div>

                    <div className={classes.rightHeader}>
                        <SearchIcon className={classes.buttonSearch} />


                        <IconButton className="button"
                            className={classes.cartButton}
                            onClick={handleClick}
                            onMouseDown={handleClose}>

                            <PermIdentityIcon
                                className={classes.profileButton}
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                            </PermIdentityIcon>
                            <Menu

                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >


                                <MenuItem>
                                    <div className="avatarContainer">
                                        <Avatar className="avatarIcon" alt='profile' />
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    {localStorage.getItem("FullName")}
                                </MenuItem>
                                <MenuItem>
                                    {localStorage.getItem("email")}
                                </MenuItem>

                                <MenuItem>
                                    <Button
                                        onClick={HandleLogout}
                                        variant="contained" style={{
                                            fontWeight: 400,
                                            backgroundColor: "light-blue",
                                        }}
                                    >Sign Out
                                     </Button>
                                </MenuItem>
                            </Menu>
                            <span className={classes.name}>Profile</span>
                        </IconButton>
                        <IconButton
                            className={classes.cartButton}
                        >
                            <StyledBadge>
                                <ShoppingCartOutlinedIcon />
                            </StyledBadge>
                            <span>Cart</span>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

