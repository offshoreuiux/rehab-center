/** @format */

import ImageCard from './ui/ImageCard';
import style from './whoWeAre.module.scss';
import inpatient from '../assets/inpatient.png';
import support from '../assets/support.png';

function WhoWeAre() {
  return (
    <div className={style.container}>
      <h6 className={style.title}>Who We Are</h6>
      <p className={style.subText}>
        At Better Life Recovery Center, we are dedicated to helping individuals
        break free from addiction and rebuild their lives. Our holistic approach
        combines medical expertise, emotional support, and tailored programs to
        meet each patient’s unique needs.
      </p>
      <div className={style.verticalLine}>
        <hr color="#888" />
      </div>
      <div className={style.imageCardContainer}>
        <ImageCard
          img={inpatient}
          title={'Inpatient Treatment'}
          content={
            'Inpatient treatment provides intensive, round-the-clock care for individuals facing mental health or substance use challenges. It offers a structured environment to promote healing, recovery, and long-term wellness.'
          }
        />

        <ImageCard
          img={support}
          title={'Family Support Programs'}
          content={
            'Addiction affects not just the individual but their loved ones as well. Our family support programs are designed to help family members understand addiction, learn how to support their loved ones in recovery, and heal together. '
          }
          reverse={true}
        />
      </div>
    </div>
  );
}

export default WhoWeAre;
