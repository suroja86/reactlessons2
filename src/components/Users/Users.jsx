import s from './users.module.css'
import React from "react";
import userPhoto from '../../assets/images/images.jpeg'
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pageWrapper}>
                {
                    pages.map(p => {
                        return <span
                            className={props.currentPage === p && s.selectedPage}
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}
                        >
                                {p}
                            </span>
                    })
                }
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img alt={u.name} src={u.photos.small ? u.photos.small : userPhoto}
                                             className={s.usersPhoto}/>
                                    </NavLink>
                                    </div>
                                <div>
                                    <button onClick={()=>{
                                        debugger
                                        if (u.followed) {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true}, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}).then(r => {

                                                if(r.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                        } else {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}}, {withCredentials: true}).then(r => {

                                                if(r.data.resultCode===0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                        }
                                    }}>
                                        {u.followed ? 'Unfollow' : 'Follow'}
                                    </button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                       {u.name}
                                    </div>
                                    <div>
                                        {u.status}
                                    </div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users