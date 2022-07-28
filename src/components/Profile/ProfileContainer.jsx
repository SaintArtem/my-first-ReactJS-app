import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux/es/exports';
import { setUserProfile } from './../../redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let withRouter = (ProfileContainer) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));