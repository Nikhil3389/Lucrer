import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormCheckbox from '../../components/Forms/FormCheckbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '../../api/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
    lastname: '',
    citizenship: false,
    idType: '',
    identificationNumber: '',
    dateOfBirth: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  });
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  // const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);
  const [aadharError, setAadharError] = useState(false);
  const [pincode, setPincode] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      setLoading(true);
      const data = await signup(formValues);
      console.log(data);
      if (data.err) {
        toast.error(data.err);
        setLoading(false);
        return;
      }
      toast.success('Login Successful');
      navigate(`/authenticate/${data.user._id}`);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error('Login Failed');
    }
  };

  const phoneBlurHandler = () => {
    // console.log(studentData.phone);
    let regex = /^[5-9]{2}[0-9]{8}$/;
    if (regex.test(formValues.phone)) {
      setPhoneError(false);
      setDisableButton(false);
    } else {
      setPhoneError(true);
      setDisableButton(true);
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

  const aadharBlurHandler = () => {
    let regex = /^[0-9]{12}$/;
    if (regex.test(formValues.aadhar)) {
      setAadharError(false);
      setDisableButton(false);
    } else {
      setAadharError(true);
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
          <div className='flex flex-center'>
            <div className='login no-select'>
              <Box>
                <div className='box-vertical-padding box-horizontal-padding'>
                  <div>
                    <div className='form-logo center'>
                      <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
                    </div>
                    <h1 className='form-title center'>Account creation</h1>
                    <p className='form-desc center'>
                      Please enter the information below. your activation information to your email.
                    </p>
                    <form className='form' onSubmit={handleSubmit}>
                      <div className='form-elements'>
                        <div className='form-line'>
                          <div className='full-width'>
                            <label htmlFor='email'>E-Mail Address</label>
                            <FormInput
                              type='email'
                              name='email'
                              value={formValues.email}
                              placeholder='Enter your e-mail address'
                              onChange={handleChange}
                              required={true}
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
                              required={true}
                            />
                          </div>
                        </div>

                        <div className='form-line'>
                          <div className='full-width'>
                            <label htmlFor='name'>Your name</label>
                            <FormInput
                              type='text'
                              name='name'
                              value={formValues.name}
                              placeholder='enter your name'
                              onChange={handleChange}
                              required={true}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='full-width'>
                            <label htmlFor='lastname'>Your surname</label>
                            <FormInput
                              type='text'
                              name='lastname'
                              value={formValues.lastname}
                              placeholder='Enter your last name'
                              onChange={handleChange}
                              required={true}
                            />
                          </div>
                        </div>

                        <div className='form-line'>
                          <div className='full-width'>
                            <FormCheckbox
                              name='citizenship'
                              checked={formValues.citizenship}
                              text='I am a citizen of the Republic of India.'
                              onChange={handleCheckboxChange}
                              required={true}
                            />
                          </div>
                        </div>

                        <div className='form-line clearfix'>
                          <div className='half-width'>
                            <label htmlFor='idType'>ID type</label>
                            <select
                              name='idType'
                              id='identityType'
                              required={true}
                              onChange={handleChange}
                            >
                              <option value=''>Select Id Type</option>
                              <option value='TC Identification number'>
                                TC Identification number
                              </option>
                            </select>
                          </div>
                          <div className='half-width'>
                            <label htmlFor='identityNumber'>Identification number</label>
                            <FormInput
                              type='text'
                              name='identificationNumber'
                              value={formValues.identificationNumber}
                              placeholder='Enter your ID number'
                              onChange={handleChange}
                              required={true}
                            />
                          </div>
                        </div>

                        <div className='form-line clearfix'>
                          <div className='half-width'>
                            <label htmlFor='day'>Date of birth</label>
                            <FormInput
                              type='date'
                              name='dateOfBirth'
                              value={formValues.dateOfBirth}
                              placeholder='Enter your DOB'
                              onChange={handleChange}
                              required={true}
                            />
                          </div>
                          <div className='half-width'>
                            <label htmlFor='phone'>Mobile number</label>{' '}
                            <FormInput
                              type='text'
                              name='phone'
                              value={formValues.phone}
                              placeholder='Enter your phone number'
                              onChange={handleChange}
                              onBlur={phoneBlurHandler}
                              required={true}
                            />
                            {phoneError && (
                              <div style={{ marginTop: '1px', color: 'red', fontSize: '12px' }}>
                                Please enter a valid phone
                              </div>
                            )}
                          </div>
                        </div>

                        <div className='form-line'>
                          <div className='full-width'>
                            <FormCheckbox
                              name='agreeToPolicies1'
                              checked={formValues.agreeToPolicies1}
                              text='I have read the KVVK Illumination Text and I accept the user agreement.'
                              onChange={handleCheckboxChange}
                              required={true}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='full-width'>
                            <FormCheckbox
                              name='agreeToPolicies2'
                              checked={formValues.agreeToPolicies2}
                              text='I have read and reviewed the KVVK Open Consent Text. I consent to the processing and transfer of my personal data within the scope of this text'
                              onChange={handleCheckboxChange}
                              required={true}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='full-width'>
                            <FormCheckbox
                              name='agreeToPolicies3'
                              checked={formValues.agreeToPolicies3}
                              text='I agree to receive commercial electronic messages via e-mail, telephone and electronic communication channels within the scope of the KVVK Enlightenment Text regarding products and services.'
                              onChange={handleCheckboxChange}
                              required={true}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='buttons'>
                            <FormButton
                              type='submit'
                              text='Create Account'
                              disabled={disableButton}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
                          <div className='center'>
                            <p>
                              Do you have an account? <Link to='/'>login</Link>.
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

export default SignupScreen;
