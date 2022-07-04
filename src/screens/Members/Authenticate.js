import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormButton from '../../components/Forms/FormButton';
import FormInput from '../../components/Forms/FormInput';
import { ToastContainer, toast } from 'react-toastify';
import { getOtp } from '../../api/auth';
import Loader from '../Loader';

const Authenticate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const getOtpHandler = async (method) => {
    const formData = {
      method: method,
      id,
    };
    try {
      setLoading(true);
      const data = await getOtp(formData);
      console.log(data);
      if (data.err) {
        toast.error(data.err);
        setLoading(false);
        return;
      }
      toast.success('OTP sent successfully');
      navigate(`/verifyOtp/${id}`);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error('OTP sending failed');
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
                  <h1 className='form-title center'>Authenticate</h1>
                  <div className='form'>
                    <div className='form-elements'>
                      <div className='form-line'>
                        <div className='buttons'>
                          <FormButton
                            type='button'
                            text='Get An Otp on Phone'
                            onClick={() => getOtpHandler('phone')}
                          />
                        </div>
                      </div>
                      <div className='form-line'>
                        <div className='buttons'>
                          <FormButton
                            type='button'
                            text='Get An Otp on Email'
                            onClick={() => getOtpHandler('email')}
                          />
                        </div>
                      </div>
                    </div>
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

export default Authenticate;
