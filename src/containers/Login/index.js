import React, {Component} from "react";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {

    signin() {
        this.props.history.push("/table")
    }

    render() {
        const {isLoggedIn, login} = this.props;
        return (
            <div className="row justify-content-center">
                <div className="col-4 border border-grey py-5">
                    <div>
                        <Form>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="w-100 text-center mr-sm-2">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email"/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="w-100 text-center mr-sm-2">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password"/>
                            </FormGroup>
                            <div className="text-center mt-3"><Button onClick={() => this.signin()}>Signin</Button></div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(ACTIONS.attemptLogin({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
