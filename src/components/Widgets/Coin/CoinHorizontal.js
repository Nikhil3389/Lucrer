import { memo } from 'react';


import Box from '../../Common/Box';

const CoinHorizontal = memo(({ item, searchValue, searchOnChange, searchSubmit }) => (
  <Box>
    <div className='box-content box-vertical-padding box-horizontal-padding'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div>
          <div className='icon cover' style={{ backgroundImage: `url('${item.iconUrl}')` }} />
        </div>
        <div>
          <label>{item.name}</label>
          <strong>{item.change}</strong>
        </div>
        <div className='divider' />
        <div>
          <label className='gray'>value price</label>
          <strong>
            {item.price}
            <em className='red'>{item.change}</em>
          </strong>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
          <label className='gray'>Market Cap</label>
          <strong>{item.marketCap}</strong>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
          <label className='gray'>Volume</label>
          <strong>{item.volume}</strong>
        </div>
        <div className='divider responsive-hide' />
        <div className='no-select responsive-hide'>
          <form onSubmit={searchSubmit} noValidate>
            <input
              type='text'
              name='keyword'
              id='keyword'
              placeholder='Search'
              autoComplete='off'
              onChange={searchOnChange}
              value={searchValue}
            />
            <button type='button' className='pointer'>
              <i className='material-icons'>search</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Box>
));


export default CoinHorizontal;
