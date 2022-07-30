import React from "react";
import Header from "./Header";
import { loggedIn } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { setAuthUserData } from "./../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loggedIn();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData, loggedIn })(HeaderContainer);