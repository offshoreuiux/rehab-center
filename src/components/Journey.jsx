/** @format */

import style from './journey.module.scss';
import CustomButton from './ui/CustomButton';

function Journey() {
  return (
    <div className={style.container}>
      <h6 className={style.title}>Start Your Recovery Journey Today</h6>
      <p className={style.text}>
        Don’t wait another day to reclaim your life. Contact us now to speak
        with a compassionate team member and take the first step toward lasting
        recovery.
      </p>
      <CustomButton title="continue" />
    </div>
  );
}

export default Journey;
