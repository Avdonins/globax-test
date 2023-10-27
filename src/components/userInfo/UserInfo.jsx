import React from 'react';
import styled from './UserInfo.module.scss';

const UserInfo = ({ user }) => {
    return (
        <div className={styled.userInfo}>
            <h2 className={styled.userInfo__name}>
                {user.name}
            </h2>
            <div className={styled.userInfo__info}>
                <span className={styled.userInfo__info_title}>
                    Телефон:
                </span>
                <span className={styled.userInfo__info_value}>
                    {user.phone}
                </span>
                <span className={styled.userInfo__info_title}>
                    Почта:
                </span>
                <span className={styled.userInfo__info_value}>
                    {user.email}
                </span>
                <span className={styled.userInfo__info_title}>
                    Дата приема:
                </span>
                <span className={styled.userInfo__info_value}>
                    {new Date(user.hire_date).toLocaleDateString("ru")}
                </span>
                <span className={styled.userInfo__info_title}>
                    Должность:
                </span>
                <span className={styled.userInfo__info_value}>
                    {user.position_name}
                </span>
                <span className={styled.userInfo__info_title}>
                    Подразделение:
                </span>
                <span className={styled.userInfo__info_value}>
                    {user.department}
                </span>
            </div>
            <div className={styled.userInfo__additionalInfo}>
                <span className={styled.userInfo__additionalInfo_title}>
                    Дополнительная информация:
                </span>
                <span className={styled.userInfo__additionalInfo_value}>
                    {user.additional_info ? user.additional_info : ''}
                </span>
            </div>
        </div>
    );
};

export default UserInfo;