import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


export default function SignUp(props){

    const [name, setName] = React.useState();
    const [nameFlag, setNameFlag] = React.useState();
    const [nameError, setNameError] = React.useState("");
    const [email, setEmail] = React.useState();
    const [emailFlag, setEmailFlag] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [password, setPassword] = React.useState();
    const [passwordFlag, setPasswordFlag] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("");
    const [mobile, setMobile] = React.useState();
    const [mobileFlag, setMobileFlag] = React.useState(false);
    const [mobileError, setMobileError] = React.useState("");


    // const makeInitial = () => {
    //     setNameFlag(false);
    //     setNameError("");
    //     setEmailFlag(false);
    //     setEmailError("");
    //     setMobileFlag(false);
    //     setMobileError("");
    //     setPasswordFlag(false);
    //     setPasswordError("");
    // };


    return(
        <div className="signup_container">
            <div className="signup">
                
            </div>
        </div>
    )



}