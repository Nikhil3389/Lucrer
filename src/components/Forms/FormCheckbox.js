import { memo } from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = memo(({ name, text, onChange, checked,required }) => (
  <label className='checkbox-container'>
    {text}
    <input
      type='checkbox'
      id={name}
      name={name}
      value='0'
      defaultChecked={checked}
      onChange={(e) => onChange(e)}
      required={required}
    />
    <span className='checkmark' />
  </label>
));

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormCheckbox;
