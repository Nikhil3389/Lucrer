import { memo, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import millify from 'millify';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
const CapitalRow = memo(({ item, index }) => {
  const [color, setColor] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  const detailsHandler = () => {
    navigate(`/coin/${item.uuid}`);
  };




  return (
    <tr style={{ cursor: 'pointer' }} onClick={detailsHandler}>
      <td>
        <div className='rank accent no-select'>{item.rank}</div>
      </td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.iconUrl}')` }} />
        <strong>{item.name}</strong>
      </td>
      <td className='center'>
        <strong>${millify(item.price)}</strong>
      </td>
      <td className='center'>
        <strong className={color}>{item.change}</strong>
      </td>
      <td className='center responsive-hide2'>{millify(item.marketCap)}</td>
      <td className='responsive-hide'>
        <div className='line-chart'>
          <Sparklines data={item.sparkline} width={150} height={50}>
            <SparklinesLine style={{ strokeWidth: 4 }} color={color} />
          </Sparklines>
        </div>
      </td>
      <td className='right'>
        <button type='button' className='pointer' onClick={() => handleMenuOpen()}>
          <i className='material-icons'>more_vert</i>
        </button>

        {menuOpened && (
          <div className='box-dropdown'>
            <ul>
              <li>
                <button type='button'>
                  <i className='material-icons'>settings</i>
                  Button 1
                </button>
              </li>
              <li>
                <button type='button'>
                  <i className='material-icons'>favorite</i>
                  Button 2
                </button>
              </li>
              <li>
                <button type='button'>
                  <i className='material-icons'>info</i>
                  Button 3
                </button>
              </li>
            </ul>
          </div>
        )}
      </td>
    </tr>
  );
});

CapitalRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CapitalRow;
