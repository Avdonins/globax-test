import React, { useState } from 'react';
import styled from './UserElement.module.scss';
import phoneIcon from '../../assets/phoneIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import ModalWindow from '../modalWindow/ModalWindow';
import UserInfo from '../userInfo/UserInfo';

const UserElement = ({ user }) => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className={styled.userElement} onClick={() => setModal(true)}>
                <h2 className={styled.userElement__name}>{user.name}</h2>
                <div className={styled.userElement__phone}>
                    <img src={phoneIcon} />
                    <span>{user.phone}</span>
                </div>
                <div className={styled.userElement__email}>
                    <img src={emailIcon} />
                    <span>{user.email}</span>
                </div>
            </div>
            <ModalWindow visible={modal} setVisible={setModal}>
                <UserInfo user={user} />
            </ModalWindow>
        </>
    );
};

export default UserElement;