import React, {Component} from "react";
import {
    Input,
    Form,
    Col,
    Row,
   FormGroup
} from "reactstrap";

class TaskForm extends Component {
    render() {
        return (
            <div className="row justify-content-center px-3">
                <div className="col">
                    <div>
                        <Form>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup>
                                        <Input type="email" name="email" id="exampleEmail"
                                               placeholder="email"/>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password placeholder"/>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <button className="btn btn-secondary">Add</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskForm;