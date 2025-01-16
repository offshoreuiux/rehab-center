/** @format */

import style from './feature.module.scss';
import path from '../assets/path.png';
import tick from '../assets/icons/tick.svg';
import CustomButton from './ui/CustomButton';

const list = [
  'Expert medical team with years of experience',
  'Evidence-based treatment methods',
  'Comfortable, serene environment',
  'Personalized care plans',
  'Ongoing aftercare and support',
];
function Feature() {
  return (
    <div className={style.container}>
      <h6 className={style.titleMobile}>
        A Trusted Partner on Your Path to Recovery
      </h6>

      <img src={path} alt="patient-img" className={style.img} />
      <div className={style.featureContainer}>
        <h6 className={style.title}>
          A Trusted Partner on Your Path to Recovery
        </h6>

        <p className={style.text}>
          As a trusted partner on your path to recovery, we provide
          compassionate support and personalized care. Together, we'll navigate
          challenges and celebrate every step toward a healthier, brighter
          future.
        </p>
        <ul className={style.list}>
          {list.map((item, ind) => (
            <li key={ind} className={style.listItem}>
              <img src={tick} alt="tick-icon" />
              <p className={style.listItemText}>{item}</p>
            </li>
          ))}
        </ul>
        <CustomButton />
      </div>
    </div>
  );
}

export default Feature;
