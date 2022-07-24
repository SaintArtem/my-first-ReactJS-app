import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1, photoUrl: 'https://static.foxnews.com/foxnews.com/content/uploads/2022/03/artem-c.jpg',
            followed: false, fullName: 'Artem C.', status: 'I have a lot of bitches', location: { city: 'Kiev', country: 'Ukraine' }
        },
        {
            id: 2, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/2a4aee964852dd35cf813d7ed693807d.jpg',
            followed: true, fullName: 'Diana R.', status: 'I have a lot of Boys', location: { city: 'Los-Angeles', country: 'USA' }
        },
        {
            id: 3, photoUrl: 'https://i.dailymail.co.uk/i/pix/2016/10/19/08/3982B1E700000578-0-image-a-1_1476861267279.jpg',
            followed: false, fullName: 'Michael Q.', status: 'Jeux ma pelle Michael', location: { city: 'Paris', country: 'France' }
        },])
    }
    
    return (
        <div>
            {
                props.users.map(u => <div className={s.generalWrapper} key={u.id}>
                    <div className={s.leftSide}>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl} alt={u.fullName} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;