import React from 'react';
import './login.scss';
import login from '../../Assets/login.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailErr: false,
            emailErrMsg: '',

            password: '',
            passwordErr: false,
            passwordErrMsg: '',

            // snackbarMsg: '',
            // snackType: '',
            // open: false,
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validationCheck = () => {
        this.setState({
            emailErr: false,
            emailErrMsg: "",

            passwordErr: false,
            passwordErrMsg: ""
        })

        let isError = false;

        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.state.email)) {
            this.setState({ emailErr: true })
            this.setState({ emailErrMsg: "Enter a valid email" })
            isError = true;
        }

        if (this.state.email.length === 0) {
            this.setState({ emailErr: true })
            this.setState({ emailErrMsg: "Enter email" })
            isError = true;
        }

        if (this.state.password.length === 0) {
            this.setState({ passwordErr: true })
            this.setState({ passwordErrMsg: "Enter a password" })
            isError = true;
        }
        return isError;
    }

    submit=()=>{
        this.validationCheck();
    }

    render() {
        return (
            <div className="login_container">
                {/* main box */}
                <div className="borders">
                    {/* fig box */}
                    <div className="box_field">
                        <div className="image_field">
                            <img src={login} height="225" className="image" ></img>
                            <p className="text_field">
                                <b> ONLINE BOOK SHOPPING</b>
                            </p>
                        </div>
                    </div>

                    <form className="form">
                        <div className="form_input">
                            <div className="header">
                                <div className="login">
                                    <button className="btn" text="test">
                                        <b> LOGIN</b>
                                    </button>
                                    <button className="btn" text="test">
                                        <b>SIGNUP</b>
                                    </button>
                                </div>
                            </div>
                            <div className="input">
                                <br></br>
                                <div className="input_field">
                                    <TextField id="outlined"
                                        size="small"
                                        name="email"
                                        onChange={this.handleChange}
                                        error={this.state.emailErr}
                                        helperText={this.state.emailErrMsg}
                                        label="Usermail"
                                        variant="outlined"
                                        fullWidth />
                                </div>
                                <div className="input_field">
                                    <TextField id="outlined"
                                        size="small"
                                        label="Password"
                                        name="password"
                                        onChange={this.handleChange}
                                        error={this.state.passwordErr}
                                        helperText={this.state.passwordErrMsg}
                                        type="password"
                                        variant="outlined"
                                        fullWidth />
                                </div>
                            </div>

                            <div className="button">
                                <Button variant="text" fullWidth="true" color="#ffffff" onClick={this.submit} >
                                    LOGIN </Button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        )
    }

}

export default Login;