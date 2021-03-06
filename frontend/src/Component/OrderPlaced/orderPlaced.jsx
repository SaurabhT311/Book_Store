import React from "react";
import "./orderPlaced.scss";
import placed from "../../Assets/orderplaced.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "17px",
  },
  shopingButton: {
    marginTop: "1%",
    backgroundColor: "",
  },
}));

export default function OrderPlaced(props) {
  const classes = useStyles();
  const random = localStorage.getItem("order_ID");
  return (
    <div className="placedBody">
      <img className="successfulImage" src={placed} alt="" />
      <Typography className={classes.text}>
        Hoorayy!!!your order has been confirmed{" "}
      </Typography>
      <Typography className={classes.text}>
        {" "}
        the order id is #{random} save the order id for
      </Typography>
      <Typography className={classes.text}>future communication </Typography>

      <table className="orderTable">
        <tr>
          <th>Email Us</th>
          <th>Contact Us</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>admin@bookstore.com</td>
          <td>+91 8654259810</td>
          <td>
          Rammurthy nagar, Bangalore-560016
          </td>
        </tr>
      </table>
      <Button
        className={classes.shopingButton}
        onClick={(e) => {
          props.nextPath(e, "../dashboard");
        }}
        variant="contained"
        color="primary"
      >
        CONTINUE SHOPPING
      </Button>
    </div>
  );
}