import React, {Component} from "react";
import {connect} from "react-redux";
import {ACTIONS} from "../../redux";
import Helpers from "../../common/helpers";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    login(event) {
        event.preventDefault();
        const {username, password} = this.state;
        if (username && password) {
            this.props.login({username, password})
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="row justify-content-center">
                <div className="col-4 border border-grey py-5">
                    <div>
                        <Form onSubmit={(e) => this.login(e)}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="w-100 text-center mr-sm-2">UserName</Label>
                                <Input
                                    value={username}
                                    onChange={(e) => this.setState({username: e.target.value})}
                                    name="username"
                                    placeholder="username"/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="w-100 text-center mr-sm-2">Password</Label>
                                <Input
                                    value={password}
                                    onChange={({target}) => this.setState({password: target.value})}
                                    type="password"
                                    name="password"
                                    placeholder="password"/>
                            </FormGroup>
                            <div className="text-center mt-3"><Button type="submit">Signin</Button></div>
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
    login: (data) => dispatch(ACTIONS.attemptLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
