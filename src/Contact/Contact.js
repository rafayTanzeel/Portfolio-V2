import React from 'react';
import './Contact.css';

const contact = (props) => (
      <div className="contact-card mdl-card mdl-cell--12-col mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text">Contact</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">phone</i>
                (604) 442–4115
                <span className="mdl-list__item-sub-title">Mobile</span>
              </span>
            </li>
            <div className="mdl-menu__item--full-bleed-divider"></div>
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">email</i>
                rafaytanzeel@gmail.com
                <span className="mdl-list__item-sub-title">Personal</span>
              </span>
            </li>
            <div className="mdl-menu__item--full-bleed-divider"></div>
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">place</i>
                218-295 Adelaide Street W, Toronto, ON
                <span className="mdl-list__item-sub-title">Home</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
);

export default contact;
