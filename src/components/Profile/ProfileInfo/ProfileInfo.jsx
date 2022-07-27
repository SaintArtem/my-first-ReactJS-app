import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
      if(!props.profile) return <Preloader />

      return (
            <div>
                  <div>
                        <img src="https://cdn.motor1.com/images/mgl/yKJwK/s4/2020-porsche-911-turbo.webp" alt="Porsche" />
                  </div>
                  <div className={s.descriptionBlock}>
                        <img src={props.profile.photos.large} alt="" />
                        ava + desc
                  </div>
            </div>
      );
}

export default ProfileInfo;

