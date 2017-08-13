import React from 'react';
import Hamburger from './../../../imgs/Menu_btn_white.svg';

export default () => (
  <button className="ham-btn" data-toggle="modal" data-target="#menu-modal"
          title="Menu">
    <img src={Hamburger}
         alt="logo" /></button>)