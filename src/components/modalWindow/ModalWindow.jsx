import React from 'react';
import styled from './ModalWindow.module.scss';
import closeIcon from '../../assets/closeIcon.svg';

const ModalWindow = ({ children, visible, setVisible }) => {
    const rootClasses = [styled.modalWindow];

    if (visible) {
        rootClasses.push(styled.modalWindow__active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styled.modalWindow__content} onClick={(e) => e.stopPropagation()}>
                {children}
                <img
                    className={styled.modalWindow__closeIcon}
                    src={closeIcon}
                    onClick={() => setVisible(false)}
                />
            </div>
        </div>
    );
};

export default ModalWindow;