/** @format */

import style from './heroSection.module.scss';
import hero from '../assets/hero.png';
import heroMobile from '../assets/heroMobile.png';
import CustomButton from './ui/CustomButton';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';
import customer3 from '../assets/customer3.png';

function HeroSection() {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.textContainer}>
          <p className={style.text}>Find Your Inner Resilience</p>
          <span className={style.primary}>
            Reclaim Your Life,
            <span className={style.primaryColored}> Rediscover</span> Your
            Strength
          </span>
          <p className={style.secondaryText}>
            Reclaim Your Life, Rediscover Your Strength" is a powerful call to
            action, encouraging individuals to take control of their journey,
            overcome challenges, and reconnect with their inner power and
            resilience. It emphasizes empowerment, personal growth, and the
            pursuit of a fulfilled life.
          </p>
          <CustomButton />
        </div>
        <div className={style.imgContainer}>
          <img src={hero} alt="hero-img" className={style.heroImg} />
          <img
            src={heroMobile}
            alt="heroMobile-img"
            className={style.heroMobileImg}
          />
          <div className={style.trustedContainer}>
            <p className={style.trusted}>Trusted Customers</p>
            <div className={style.customerImageContainer}>
              <img
                src={customer1}
                alt="customer1"
                className={`${style.img} ${style.img1}`}
              />
              <img
                src={customer2}
                alt="customer2"
                className={`${style.img} ${style.img2}`}
              />
              <img
                src={customer3}
                alt="customer3"
                className={`${style.img} ${style.img3}`}
              />
              <button className={style.plusBtn}>
                {' '}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.13867 9.16903V0.526988H5.85813V9.16903H4.13867ZM0.680575 5.70455V3.98509H9.32262V5.70455H0.680575Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
