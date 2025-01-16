/** @format */

import { useState } from 'react';
import CustomButton from './ui/CustomButton';
import style from './userInfo.module.scss';
import arrow from '../assets/icons/arrow.svg';
import arrowActive from '../assets/icons/arrowActive.svg';

function UserInfo() {
  const [userData, setUserData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleClick = () => {
    if (currentStep === 2) return;
    setCurrentStep((prev) => prev + 1);
  };
  const handleinput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.stepContainer}>
          <div
            className={`${currentStep > 0 ? style.activeStep : style.step} `}
          >
            <p
              className={`${style.number} ${currentStep >= 0 && style.active}`}
            >
              1
            </p>
            <p
              className={`${style.stepText} ${
                currentStep >= 0 && style.activeText
              }`}
            >
              Personal Information
            </p>
          </div>
          <div
            className={`${currentStep > 1 ? style.activeStep : style.step} `}
          >
            <p
              className={`${style.number} ${currentStep >= 1 && style.active}`}
            >
              2
            </p>
            <p
              className={`${style.stepText} ${
                currentStep >= 1 && style.activeText
              }`}
            >
              Health Assessment
            </p>
          </div>
          <div
            className={`${currentStep > 2 ? style.activeStep : style.step} `}
          >
            <p
              className={`${style.number} ${currentStep === 2 && style.active}`}
            >
              3
            </p>
            <p
              className={`${style.stepText} ${
                currentStep === 2 && style.activeText
              }`}
            >
              Rehabilitation Plan
            </p>
          </div>
        </div>
        {currentStep === 0 ? (
          <>
            <p className={style.currentStep}>Step 1</p>
            <h6 className={style.title}>General Info</h6>
            <form className={style.formContainer}>
              <div className={style.inputFieldContainer}>
                <label htmlFor="fullName" className={style.label}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className={style.inputField}
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleinput}
                />
              </div>
              <div
                className={`${style.inputFieldContainer} date`}
                data-placeholder="Date of Birth"
              >
                <label htmlFor="dob" className={style.label}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className={style.inputField}
                  name="dob"
                  value={userData.dob}
                  onChange={handleinput}
                />
              </div>
              <div className={style.inputFieldContainer}>
                <label htmlFor="gender" className={style.label}>
                  Gender
                </label>
                <select
                  name="gender"
                  className={style.inputSelectField}
                  value={userData.gender}
                  onChange={handleinput}
                >
                  <option value="" disabled defaultValue hidden>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div className={style.inputFieldContainer}>
                <label htmlFor="phone" className={style.label}>
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className={style.inputField}
                  name="phone"
                  value={userData.phone}
                  onChange={handleinput}
                />
              </div>
              <div className={style.inputFieldContainer}>
                <label htmlFor="email" className={style.label}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className={style.inputField}
                  name="email"
                  value={userData.email}
                  onChange={handleinput}
                />
              </div>
              <div className={style.inputFieldContainer}>
                <label htmlFor="address" className={style.label}>
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className={style.inputField}
                  name="address"
                  value={userData.address}
                  onChange={handleinput}
                />
              </div>
            </form>
          </>
        ) : currentStep === 1 ? (
          <>
            <p className={style.currentStep}>Step 2</p>
            <h6 className={style.title}>Health Info</h6>
            <h1>Under construction</h1>
          </>
        ) : (
          <>
            <p className={style.currentStep}>Step 3</p>
            <h6 className={style.title}>Rehabilitation Plan</h6>
            <h1>Under construction</h1>
          </>
        )}
        <div className={style.btnContainer}>
          <CustomButton
            title={'continue'}
            customeStyle={{ width: '19rem' }}
            onClick={handleClick}
          />
        </div>
      </div>
      {['Personal Information', 'Health Assessment', 'Rehabilitation Plan'].map(
        (each, i) => (
          <div
            key={i}
            className={style.accordion}
            onClick={() => setCurrentStep(i)}
            style={{ height: currentStep === i ? 'auto' : '52px' }}
          >
            <div className={style.accordionHeader}>
              <div className={style.accordionHeading}>
                <p
                  className={`${style.number} ${
                    currentStep >= i && style.active
                  }`}
                >
                  {i + 1}
                </p>
                <p
                  className={`${style.stepText} ${
                    currentStep >= i && style.activeText
                  }`}
                >
                  {each}
                </p>
              </div>
              <img src={currentStep === i ? arrowActive : arrow} />
            </div>
            <div className={style.accordionMain}>
              <p className={style.currentStep}>Step {i + 1}</p>
              <h6 className={style.title}>General Info</h6>
              <form className={style.formContainer}>
                <div className={style.inputFieldContainer}>
                  <label htmlFor="fullName" className={style.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className={style.inputField}
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleinput}
                  />
                </div>
                <div
                  className={`${style.inputFieldContainer} date`}
                  data-placeholder="Date of Birth"
                >
                  <label htmlFor="dob" className={style.label}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    className={style.inputField}
                    name="dob"
                    value={userData.dob}
                    onChange={handleinput}
                  />
                </div>
                <div className={style.inputFieldContainer}>
                  <label htmlFor="gender" className={style.label}>
                    Gender
                  </label>
                  <select
                    name="gender"
                    className={style.inputSelectField}
                    value={userData.gender}
                    onChange={handleinput}
                  >
                    <option value="" disabled defaultValue hidden>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className={style.inputFieldContainer}>
                  <label htmlFor="phone" className={style.label}>
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className={style.inputField}
                    name="phone"
                    value={userData.phone}
                    onChange={handleinput}
                  />
                </div>
                <div className={style.inputFieldContainer}>
                  <label htmlFor="email" className={style.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className={style.inputField}
                    name="email"
                    value={userData.email}
                    onChange={handleinput}
                  />
                </div>
                <div className={style.inputFieldContainer}>
                  <label htmlFor="address" className={style.label}>
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className={style.inputField}
                    name="address"
                    value={userData.address}
                    onChange={handleinput}
                  />
                </div>
                <div className={style.btnContainer}>
                  <CustomButton
                    title={'continue'}
                    customeStyle={{ width: '100%' }}
                    onClick={handleClick}
                  />
                </div>
              </form>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UserInfo;
