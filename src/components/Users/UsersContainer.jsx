import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {follow, setCurrentPage, toggleIsFetching, setUsers, setUsersTotalCount} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}, {withCredentials: true}).then(r => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(r.data.items)
            if (r.data.totalCount !== this.props.totalUserCount) {
                this.props.setUsersTotalCount(r.data.totalCount)
            }
        })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}, {withCredentials: true}).then(r => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUserCount: state.usersPage.totalUserCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching
        }
    )
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

let mapDispatch = {
    follow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
}

export default connect(mapStateToProps, mapDispatch)(UsersContainer)