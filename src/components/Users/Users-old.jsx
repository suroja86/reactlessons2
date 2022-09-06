import s from './users.module.css'
import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/images.jpeg'

const UsersOld = (props) => {
    let getUsers = () => {
        const config = {
            headers: {
                'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f',
            }
        }
        const data = {}
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users', data, config).then(r => {
                props.setUsers(r.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div><img alt={u.name} src={u.photos.small ? u.photos.small: userPhoto} className={s.usersPhoto}/></div>
                                <div>
                                    <button onClick={() => props.follow(u.id)}>
                                        {u.isFollow?'Unfollow':'Follow'}
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

export default UsersOld