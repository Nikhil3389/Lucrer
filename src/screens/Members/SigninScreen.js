import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormButton from '../../components/Forms/FormButton';
import FormInput from '../../components/Forms/FormInput';
import { login } from '../../api/auth';
import Loader from '../Loader';
import { ToastContainer, toast } from 'react-toastify';
const SigninScreen = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      setLoading(true);
      const data = await login(formValues);
      console.log(data);
      if (data.err) {
        toast.error(data.err);
        setLoading(false);
        return;
      }
      toast.success("You're logged in successfully");
      navigate(`/authenticate/${data.user._id}`);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error('Login Failed');
    }
  };

  const emailBlurHandler = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(formValues.email)) {
      setEmailError(false);
      setDisableButton(false);
    } else {
      setEmailError(true);
      setDisableButton(true);
    }
  };

  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme='colored'
      />
      {loading ? (
        <Loader />
      ) : (
        <MainLayout>
          <div className='flex flex-center full-height'>
            <div className='login no-select'>
              <Box>
                <div className='box-vertical-padding box-horizontal-padding'>
                  <div>
                    <div className='form-logo center'>
                      <Link to='/'>
                        <h3 style={{ color: 'blue', fontWeight: '600' }}>LucreR</h3>
                      </Link>
                    </div>
                    <h1 className='form-title center'>Member login</h1>

                    <form className='form' onSubmit={handleSubmit} noValidate>
                      <div className='form-elements'>
                        <div className='form-line'>
                          <div className='full-width'>
                            <label htmlFor='phone'>Your Email</label>
                            <FormInput
                              type='email'
                              name='email'
                              value={formValues.email}
                              placeholder='Enter your email'
                              onChange={handleChange}
                              onBlur={emailBlurHandler}
                            />
                            {emailError && (
                              <div style={{ marginTop: '1px', color: 'red', fontSize: '12px' }}>
                                Please enter a valid email
                              </div>
                            )}
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='full-width'>
                            <label htmlFor='password'>Your password</label>
                            <FormInput
                              type='password'
                              name='password'
                              value={formValues.password}
                              placeholder='enter your password'
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='full-width right'>
                            <Link to='/members/forgot-password'>I forgot my password</Link>
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='buttons'>
                            <FormButton
                              type='submit'
                              text='Login'
                              disabled={disableButton}
                              onClick={handleSubmit}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='center'>
                            <p>
                              If you do not have an account
                              <Link to='/signup'>new account</Link> create.
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
      )}
    </>
  );
};

export default SigninScreen;
