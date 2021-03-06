import { memo } from 'react';
import PropTypes from 'prop-types';

const FormInput = memo(({ type, name, value, placeholder, onChange,required,onBlur }) => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    autoComplete='off'
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    onBlur={onBlur}
  />
));

FormInput.defaultProps = {
  value: '',
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
