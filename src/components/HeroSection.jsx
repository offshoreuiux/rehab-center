/** @format */

import style from './heroSection.module.scss';
import hero from '../assets/hero.webp';
import heroMobile from '../assets/heroMobile.png';
import CustomButton from './ui/CustomButton';
import customer1 from '../assets/customer1.webp';
import customer2 from '../assets/customer2.webp';
import customer3 from '../assets/customer3.webp';
import listIcon from '../assets/icons/listStyleIcon.svg';
import googleLogo from '../assets/icons/googleLogo.svg';
import legitLogo from '../assets/icons/legitScriptLogo.svg';
import ratingStar from '../assets/icons/ratingStar.svg';
import ratingStarEmpty from '../assets/icons/ratingStarEmpty.svg';
import qualityLogo from '../assets/icons/nationalQualityLogo.svg';
import { useState } from 'react';

function HeroSection() {
  const [ratings, setRatings] = useState(5);
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.textContainer}>
          <p className={style.text}>Find Your Inner Resilience</p>
          <span className={style.primary}>
            A 5 Star Drug & Alcohol Detox and
            <span className={style.primaryColored}>
              {' '}
              Rehab Services Center
            </span>{' '}
            in Massachusetts
          </span>
          <p className={style.secondaryText}>
            Expert drug and alcohol detox and rehab services in Massachusetts,
            offering personalized care to support your recovery.
          </p>
          <h6 className={style.features}>Here’s What You Can Expect:</h6>
          <div className={style.featureContainer}>
            <span className={style.featureBox}>
              <img src={listIcon} alt="list-icon" />
              <p className={style.featureText}>Drug & Alcohol Detox</p>
            </span>
            <span className={style.featureBox}>
              <img src={listIcon} alt="list-icon" />
              <p className={style.featureText}>Rehabilitation Services</p>
            </span>
            <span className={style.featureBox}>
              <img src={listIcon} alt="list-icon" />
              <p className={style.featureText}>Inpatient & Outpatient Care</p>
            </span>
          </div>
          <CustomButton />
          <div className={style.logoContainer}>
            <div className={style.logoBox}>
              <div className={style.upperBorder}></div>
              <div className={style.googleLogoBox}>
                <img src={googleLogo} alt="google-logo" />
                <span>
                  <p className={style.googleRating}>Google Rating</p>
                  <div className={style.ratingBox}>
                    <p className={style.rating}>{ratings.toFixed(1)}</p>
                    {Array.from({ length: ratings }).map((__dirname, ind) => (
                      <img src={ratingStar} alt="star" key={ind} />
                    ))}
                    {/* TO SHOW EMPTY STAR ON MOBILE */}
                    {Array.from({ length: 5 - ratings }).map(
                      (__dirname, ind) => (
                        <img src={ratingStarEmpty} alt="star" key={ind} />
                      )
                    )}
                  </div>
                  <p className={style.reviews}>See all our reviews</p>
                </span>
              </div>
            </div>
            <img src={legitLogo} alt="legit-logo" />
            <img src={qualityLogo} alt="quality-logo" />
          </div>
        </div>
        <div className={style.imgContainer}>
          <img src={hero} alt="hero-image" className={style.heroImg} />
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
        <div className={style.logoMobileContainer}>
          <div className={style.logoBox}>
            <div className={style.upperBorder}></div>
            <div className={style.googleLogoBox}>
              <img
                src={googleLogo}
                alt="google-logo"
                className={style.googleLogo}
              />
              <span>
                <p className={style.googleRating}>Google Rating</p>
                <div className={style.ratingBox}>
                  <p className={style.rating}>{ratings.toFixed(1)}</p>
                  {Array.from({ length: ratings }).map((__dirname, ind) => (
                    <img
                      src={ratingStar}
                      alt="star"
                      key={ind}
                      className={style.starLogo}
                    />
                  ))}
                  {/* TO SHOW EMPTY STAR ON MOBILE */}
                  {Array.from({ length: 5 - ratings }).map((__dirname, ind) => (
                    <img
                      src={ratingStarEmpty}
                      alt="star"
                      key={ind}
                      className={style.starLogo}
                    />
                  ))}
                </div>
                <p className={style.reviews}>See all our reviews</p>
              </span>
            </div>
          </div>
          <img src={legitLogo} alt="legit-logo" className={style.legit} />
          <img src={qualityLogo} alt="quality-logo" className={style.quality} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
