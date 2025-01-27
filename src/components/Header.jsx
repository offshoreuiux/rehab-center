/** @format */

import style from './header.module.scss';
import logo from '../assets/icons/logo.svg';
import call24 from '../assets/icons/call24.svg';
import call from '../assets/icons/call.svg';
import CustomButton from './ui/CustomButton';

function Header() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={logo} alt="logo" className={style.logoImg} />
        <div className={style.textContainer}>
          <h1 className={style.title}>Better Life</h1>
          <h6 className={style.recovery}>REOVERY CENTER</h6>
        </div>
      </div>
      <div className={style.right}>
        <img
          src={call24}
          alt="call24"
          className={style.call24}
         
        />
        <img src={call} alt="call" className={style.call} />
        <div className={style.textContainer}>
          <p className={style.callText}>CALL US NOW</p>
          <p className={style.contact}>(012)234-5678</p>
        </div>
        <div className={style.btn}>
          <CustomButton
            customeStyle={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
