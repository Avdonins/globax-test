import React from 'react';
import styled from './UsersList.module.scss';
import UserElement from '../userElement/UserElement';

const UsersList = ({users}) => {
    return (
        <div className={styled.usersList}>
            {users.map((user) => {
                return <UserElement key={user.email} user={user} />
            })}
        </div>
    );
};

export default UsersList;