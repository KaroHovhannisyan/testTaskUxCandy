import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {Link} from "react-router-dom"

class Index extends Component {
    state = {
        isOpen: false,
    }

    render() {
        return (
            <div className="mb-4">
                <Navbar color="light" light expand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                               <Link className="p-5 text-decoration-none text-dark" to="/login">Signin</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Index;