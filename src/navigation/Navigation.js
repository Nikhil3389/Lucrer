import { Routes, Route } from 'react-router';

import MarketScreen from '../screens/Market/MarketScreen';
import CapitalScreen from '../screens/Capital/CapitalScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';

import NotFoundScreen from '../screens/NotFound/NotFoundScreen';

import SigninScreen from '../screens/Members/SigninScreen';
import SignupScreen from '../screens/Members/SignupScreen';
import ForgotScreen from '../screens/Members/ForgotScreen';
import ProfileScreen from '../screens/Members/ProfileScreen';
import Landing from '../screens/landing/Landing';
import Otp from '../screens/Members/Otp';
import Authenticate from '../screens/Members/Authenticate';
import CoinDetails from '../screens/Market/CoinDetails';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<SigninScreen />} />
    <Route path='/market' element={<MarketScreen />} />
    <Route path = '/coin/:coinId' element={<CoinDetails />} />
    <Route path='/members' element={<ProfileScreen />} />
    <Route path='/capital' element={<CapitalScreen />} />
    <Route path='/dashboard' element={<DashboardScreen />} />
    <Route path='/transactions' element={<TransactionsScreen />} />
    <Route path='/members/forgot-password' element={<ForgotScreen />} />
    <Route path='/signup' element={<SignupScreen />} />
    <Route path='/authenticate/:id' element={<Authenticate />} />
    <Route path='/verifyOtp/:id' element={<Otp />} />
    <Route path='*' element={<NotFoundScreen />} status={404} />
  </Routes>
);

export default Navigation;
