/** @format */

import style from './footer.module.scss';
import footer from '../assets/icons/footerLogo.svg';

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img src={footer} alt="logo" />
        <div className={style.titleContainer}>
          <h6 className={style.title}>Better Life</h6>
          <p className={style.subTitle}>REOVERY CENTER</p>
        </div>
      </div>
      <div className={style.textContainer}>
        <p className={style.contact}>contact@website.com</p>{' '}
        <p className={style.contact}>|</p>
        <p className={style.contact}>(012)234-5678</p>
      </div>
      <p className={style.copyright}>Copyright © 2024  All Rights Reserved</p>
    </div>
  );
}

export default Footer;
