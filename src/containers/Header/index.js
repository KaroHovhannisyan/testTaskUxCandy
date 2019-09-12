import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link} from "react-router-dom"
import {LOGIN_PATH} from "../../common/constants";
import {ACTIONS} from "../../redux";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        const {isLoggedIn} = this.props
        return (
            <div className="mb-4">
                <Navbar color="light" light expand>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                               <Link className="p-5 text-decoration-none text-dark" to={LOGIN_PATH}>{isLoggedIn ? "Logout": "Authorize" }</Link>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    postTask: (data) => dispatch(ACTIONS.attemptPostTask(data)),
    getTasks: () => dispatch(ACTIONS.attemptGetTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
