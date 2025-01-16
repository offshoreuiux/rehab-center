/** @format */

import style from './customButton.module.scss';

function CustomButton({
  title,
  secondayBtn = false,
  type,
  customeStyle,
  onClick,
}) {
  return (
    <button
      className={`${style.btn} ${secondayBtn && style.btnsecondary}`}
      style={customeStyle}
      type={type}
      onClick={onClick}
    >
      {title || 'Get Started'}
    </button>
  );
}

export default CustomButton;
