import React from 'react';
import './Logo.scss';
import image from '../../../assets/images/glo_logo.png';

const logo = () => {
    return (
        <img src={image} className="logo-academy" alt="Лого Академии"/>
    )
};

export default logo;