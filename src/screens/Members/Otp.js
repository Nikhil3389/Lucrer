import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormButton from '../../components/Forms/FormButton';
import FormInput from '../../components/Forms/FormInput';
import { ToastContainer, toast } from 'react-toastify';
import { getOtp, verifyOtp } from '../../api/auth';
import Loader from '../Loader';
import { useDispatch } from 'react-redux';
import { setToken, setUserDetails } from '../../store/reducers/auth';
const Otp = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { id } = useParams();
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const otpBlurHandler = () => {
    if (otp.length === 6) {
      setDisableButton(false);
      setOtpError(false);
    } else {
      setDisableButton(true);
      setOtpError(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      otp,
      id,
    };
    console.log(otp);
    try {
      setLoading(true);
      const data = await verifyOtp(formData);
      console.log(data);
      if (data.err) {
        toast.error(data.err);
        setLoading(false);
        return;
      }
      dispath(setToken(data.token));
      dispath(setUserDetails(data.user));
      toast.success("You're logged in successfully");
      navigate('/market');
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error('Login Failed');
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
                  <div className='form-logo center'>
                    <Link to='/'>
                      <h3 style={{ color: 'blue', fontWeight: '600' }}>LucreR</h3>
                    </Link>
                  </div>
                  <h1 className='form-title center' style={{ color: 'black' }}>
                    Verify Otp
                  </h1>
                  <form className='form' onSubmit={handleSubmit}>
                    <div className='form-elements'>
                      <div className='form-line'>
                        <div className='full-width'>
                          <label htmlFor='phone'>Enter Otp</label>
                          <FormInput
                            type='number'
                            name='otp'
                            value={otp}
                            placeholder='Enter your otp'
                            onChange={(e) => setOtp(e.target.value)}
                            onBlur={otpBlurHandler}
                          />
                          {otpError && (
                            <div style={{ marginTop: '1px', color: 'red', fontSize: '12px' }}>
                              Please enter a otp of 6 digit
                            </div>
                          )}
                        </div>
                      </div>

                      <div className='form-line'>
                        <div className='full-width right'>
                          <Link to='/members/forgot-password'>Resend Otp</Link>
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
                    </div>
                  </form>
                </div>
              </Box>
            </div>
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default Otp;
