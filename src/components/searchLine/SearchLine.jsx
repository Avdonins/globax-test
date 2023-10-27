import React from 'react';
import styled from './SearchLine.module.scss';
import searchLogo from '../../assets/search.svg';

const SearchLine = ({onInputChange}) => {
    return (
        <>
            <div className={styled.searchLine}>
                <input
                    className={styled.searchLine__input}
                    type="text"
                    onChange={e => onInputChange(e.target.value)}
                />
                <img
                    className={styled.searchLine__icon}
                    src={searchLogo}
                />
            </div>
        </>
    );
};

export default SearchLine;