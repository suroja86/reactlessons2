import React from "react"
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {}, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}).then(r => {
            this.props.setUserProfile(r.data)
        })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
        }
    )
}

let  mapDispatch = {
    setUserProfile,
}


export default connect(mapStateToProps, mapDispatch)(withRouter(ProfileContainer))