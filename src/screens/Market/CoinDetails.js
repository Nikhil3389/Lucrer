import { useState, useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import Market from '../../components/Widgets/Market/Market';
import BuySell from '../../components/Widgets/BuySell/BuySell';
import BuyOrders from '../../components/Widgets/BuyOrders/BuyOrders';
import SellOrders from '../../components/Widgets/SellOrders/SellOrders';
import TradeHistory from '../../components/Widgets/TradeHistory/TradeHistory';
import CoinVertical from '../../components/Widgets/Coin/CoinVertical';
import CoinHorizontal from '../../components/Widgets/Coin/CoinHorizontal';
import CandleStick from '../../components/Widgets/CandleStick/CandleStick';
import { getCryptoDetails } from '../../api/market';
import Loader from '../Loader';
const CoinDetails = () => {
  const [keyword, setKeyword] = useState('');
  const [coinInfo, setCoinInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timePeriod, setTimePeriod] = useState('7d');
  const {coinId} = useParams();
  console.log(coinId);
  useEffect(() => {
    
    console.log(coinId);
    detailsHandler(coinId)
  }, []);

  const detailsHandler = async (coinId) => {
    try {
      console.log(coinId);
      setLoading(true);

      const { data } = await getCryptoDetails(coinId);
      console.log(data);
      setCoinInfo(data.coin)
      setLoading(false);
    } catch (err) {}
  };

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
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
          <div className='content'>
            <Header />
          
            <div className='flex flex-destroy' style={{ marginTop: '4rem' }}>
              <div className='content-30 box-right-padding'>
                <Market />

                {coinInfo && <CoinVertical item={coinInfo} />}
              </div>
              <div className='content-70 flex-1'>
                {coinInfo && (
                  <CoinHorizontal
                    item={coinInfo}
                    searchValue={keyword}
                    searchOnChange={handleSearchValue}
                    searchSubmit={handleSearchSubmit}
                  />
                )}

                <div className='flex flex-destroy'>
                  <div className='content-70 flex-1 box-right-padding'>
                   {coinInfo &&  <CandleStick id={coinInfo.uuid} />}
                  </div>
                  <div className='content-30'>
                    <BuySell />
                  </div>
                </div>

                <div className='flex flex-destroy flex-space-between'>
                  <div className='flex-1 box-right-padding'>
                    <TradeHistory />
                  </div>
                  <div className='flex-1 box-right-padding'>
                    <BuyOrders />
                  </div>
                  <div className='flex-1'>
                    <SellOrders />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default CoinDetails;
