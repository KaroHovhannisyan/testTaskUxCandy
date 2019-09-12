import React, {Component} from "react";
import Helpers from "../../common/helpers"
import {
    Input,
    Form,
    Col,
    Row,
   FormGroup
} from "reactstrap";

class TaskForm extends Component {
    state = {
        email: '',
        name: '',
        text: '',
        emailError: ''
    }


    addTask(event) {
        event.preventDefault()
        const {email, name, text} = this.state;
        const isValid = Helpers.validateEmail(email);
        if (isValid) {
            console.log(email)
        }
        if (!isValid) {
            this.setState({emailError: "email is invalid"})
        }
    }

    render() {
        const {email, name, text} = this.state;

        return (
            <Row className="justify-content-center px-5">
                <Col>
                    <div>
                        <Form onSubmit={(e) => this.addTask(e)} >
                            <Row form>
                                <Col md={2}>
                                    <FormGroup>
                                        <Input
                                            value={email}
                                            onChange={(e) => this.setState({email: e.target.value})}
                                            type="email"
                                            name="email"
                                            placeholder="email"/>
                                    </FormGroup>
                                   {this.state.emailError && <div className="text-danger">Email is invalid</div>}
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Input
                                            value={name}
                                            onChange={(e) => this.setState({name: e.target.value})}
                                            type="name"
                                            name="name"
                                            placeholder="name"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            value={text}
                                            onChange={(e) => this.setState({text: e.target.value})}
                                            type="text"
                                            name="text"
                                            placeholder="Your text here..."/>
                                    </FormGroup>
                                </Col>
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

export default TaskForm;