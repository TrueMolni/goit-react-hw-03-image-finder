import PropTypes from 'prop-types';
import { LoadBtn, BtnWrapper } from './Button.styled';

export default function Button({ onClick, text }) {
  return (
    <BtnWrapper>
      <LoadBtn onClick={onClick}>{text}</LoadBtn>
    </BtnWrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
