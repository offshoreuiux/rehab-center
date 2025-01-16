/** @format */

import style from './imageCard.module.scss';
import CustomButton from './CustomButton';

function ImageCard({ img, title, content, reverse = false }) {
  return (
    <div className={`${style.container} ${reverse && style.reverseContainer}`}>
      <div className={style.box}>
        <img
          src={img}
          alt={img}
          className={`${style.img} ${reverse && style.reverseImg}`}
        />
      </div>
      <div className={style.textContainer}>
        <h6 className={style.title}>{title}</h6>
        <p className={style.text}>{content}</p>
        <CustomButton secondayBtn={true} />
      </div>
    </div>
  );
}

export default ImageCard;
