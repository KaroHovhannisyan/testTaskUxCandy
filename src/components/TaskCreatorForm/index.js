import React, {Component} from "react";
import Validator from "../../common/validator";
import {
    Input,
    Form,
    Col,
    Row,
    FormGroup,
    FormFeedback
} from "reactstrap";
import {ACTIONS} from "../../redux";
import {connect} from "react-redux";

const TASK_CREATE_FIELDS = [
    {
        name: "email",
        type: "email",
        placeholder: "Enter your email..."
    }, {
        name: "username",
        type: "text",
        placeholder: "Enter your username..."
    },
    {
        name: "text",
        type: "text",
        placeholder: "Enter your Text..."
    }
];


class TaskCreatorForm extends Component {
    state = {
        email: '',
        username: '',
        text: '',
        errors: {
            email: "",
            username: "",
            text: ""
        }
    };


    addTask(event) {
        event.preventDefault();
        const {email, username, text} = this.state;
        const isEmailValid = Validator.isEmailValid(email);
        const isUserNameValid = Validator.isValueExist(username);
        const isTextValid = Validator.isValueExist(text);
        if (isEmailValid && isTextValid && isUserNameValid) {
            this.setState({errors: {}});
           this.props.onPostTask({email, text, username})
        } else {
            let errors = {}
            if (!isEmailValid) {
                errors.email = "Email is not valid !!!"
            }
            if (!isUserNameValid) {
                errors.username = "UserName  is required !!!"
            }
            if (!isTextValid) {
                errors.text = "Text is not valid !!!"
            }

            this.setState({errors})
        }

    }

    render() {
        const state = this.state;
        console.log(this.state)
        return (
            <Row className="justify-content-center px-5">
                <Col>
                    <div>
                        <Form onSubmit={(e) => this.addTask(e)} >
                            <Row form>
                                {
                                    TASK_CREATE_FIELDS.map(field => (
                                        <Col md={3}>
                                            <FormGroup>
                                                <Input
                                                    invalid={state.errors[field.name]}
                                                    value={state[field.name]}
                                                    onChange={(e) => this.setState({[field.name]: e.target.value})}
                                                    name={field.name}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                />
                                                {state.errors[field.name] && <FormFeedback>{state.errors[field.name]}</FormFeedback>}
                                            </FormGroup>
                                        </Col>
                                    ))
                                }
                                <Col md={2}>
                                    <button type="submit" className="btn btn-secondary">Add</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default TaskCreatorForm;