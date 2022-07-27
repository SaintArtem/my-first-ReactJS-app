import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import { NavLink } from "react-router-dom";

let Users = (props) => {

      let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
      }

      let buttons = pages.map(p => {
            return <button onClick={(e) => { props.onPageChanged(p) }} type="button" className={props.currentPage === p && s.selectedPage}>{p}</button>
      })

      return (
            <div>
                  <div className={s.paginationWrapper}>
                        {buttons}
                  </div>
                  {
                        props.users.map(u => <div className={s.generalWrapper} key={u.id}>
                              <div className={s.leftSide}>
                                    <div>
                                          <NavLink to={'/profile/'+u.id}>
                                                <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.fullName} />
                                          </NavLink>
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
                                          <div>{u.name}</div>
                                          <div>{u.status}</div>
                                    </div>
                                    <div className={s.location}>
                                          <div>{"u.location.country"}</div>
                                          <div>{"u.location.city"}</div>
                                    </div>
                              </div>
                        </div>)
                  }
            </div>
      )
}

export default Users;