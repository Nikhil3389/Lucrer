import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

const ForgotScreen = () => {
  const [formValues, setFormValues] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
                </div>
                <h1 className='form-title center'>Password reset</h1>
                <p className='form-desc center'>
                  Please enter your registered phone number. Password reset information phone.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='phone'>Your telephone number</label>
                        <FormInput
                          type='text'
                          name='phone'
                          value={formValues.phone}
                          placeholder='Your telephone number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link to='/'>Login</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Gönder' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          If you do not have an account
                          <Link to='/members/signup'>new account</Link> create.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotScreen;
