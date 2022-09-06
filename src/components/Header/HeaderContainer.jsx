import React from "react"
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}).then(r => {
            if(r.data.resultCode === 0) {
                let {id, email, login} = r.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    )
}

let  mapDispatch = {
    setAuthUserData,
}

export default connect(mapStateToProps, mapDispatch)(HeaderContainer)