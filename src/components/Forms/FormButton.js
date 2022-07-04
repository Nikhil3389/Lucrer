import { memo } from 'react';
import PropTypes from 'prop-types';

const FormButton = memo(({ type, text, onClick,disabled }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className='button button-purple button-medium'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
));

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
