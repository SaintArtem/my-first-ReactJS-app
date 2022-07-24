import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
      return (
            <div>
                  <div>
                        <img src="https://cdn.motor1.com/images/mgl/yKJwK/s4/2020-porsche-911-turbo.webp" alt="Porsche" />
                  </div>
                  <div className={s.descriptionBlock}>
                        ava + desc
                  </div>
            </div>
      );
}

export default ProfileInfo;

