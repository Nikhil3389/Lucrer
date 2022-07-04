import { useState, useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import CapitalRow from '../../components/Tables/Capital/CapitalRow';
import Loader from '../Loader';
import { ToastContainer, toast } from 'react-toastify';
import { getAllCoinsPrice } from '../../api/market';
import TopBar from '../../components/Tables/TopBar/TopBar';
const MarketScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [coinInfo, setCoinInfo] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [simplified, setSimplified] = useState(true);
  const [showHead, setShowHead] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const count = simplified ? 10 : 100;
  useEffect(() => {
    historyHandler();
  }, [simplified]);

  const historyHandler = async () => {
    try {
      setLoading(true);
      const data = await getAllCoinsPrice(count);

      console.log(data);
      if (data.err) {
        setLoading(false);
        toast.error(data.err);
        return;
      }

      setCoinData(data.data.coins);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error('Something went wrong');
      console.log(err);
    }
  };

  const handleSearchValue = (e) => {
    setKeyword(e.target.value);
  };

  const showMoreHandler = () => {
    setSimplified(false);
    setShowHead(false);
  };
  useEffect(() => {
    if (keyword === '') {
      setFilteredData(coinData);
      return;
    }

    const filterData = coinData.filter((coin) =>
      coin.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filterData);
  }, [keyword,coinData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainLayout>
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
          <div className='content'>
            <Header icon='sort' title='Market' />
            {!showHead && <TopBar searchValue={keyword} searchOnChange={handleSearchValue} />}
            {showHead && (
              <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}
              >
                <h2>Top 10 Cryptocurrencies in the world</h2>
                <button className='button button-white button-large' onClick={showMoreHandler}>
                  View All
                </button>
              </div>
            )}
            {coinData && coinData.length > 0 && (
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>Queue</th>
                    <th className='left'>Coin</th>
                    <th className='center'>final price</th>
                    <th className='center'>Change (24s)</th>
                    <th className='center responsive-hide2'>Market Cap</th>
                    <th className='left responsive-hide'>Chart</th>
                    <th className='right'>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData &&
                    filteredData.map((item, index) => (
                      <CapitalRow key={item.uuid.toString()} item={item} index={index + 1} />
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default MarketScreen;
