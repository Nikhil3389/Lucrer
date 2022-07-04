import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setToken,setUserDetails } from '../../store/reducers/auth';
const HeaderRight = memo(() => {
const dispath = useDispatch();
const logoutHandler = ()=>{
  dispath(setToken(''));
  dispath(setUserDetails({}));
}

  const location = useLocation();
  const {token,userDetails} = useSelector(state => state.authReducer);
  return (
    <div className='header-right no-select'>
      {token ?(
        <div className='flex flex-center'>
        <ul className='header-menu nowrap'>
          <li>
            <Link
              to='/market'
              className={location.pathname.toLowerCase().includes('/market') ? 'active' : 'passive'}
            >
              Exchange
            </Link>
          </li>
          <li>
            <Link
              to='/data'
              className={location.pathname.toLowerCase().includes('/data') ? 'active' : 'passive'}
            >
              P2P
            </Link>
          </li>
        </ul>
        <ul className='header-icons nowrap'>
          <li>
            <Link to='/search'>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to='/members/notifications'>
              <span className='notification-badge'>23</span>
              <i className='material-icons'>notifications</i>
            </Link>
          </li>
        </ul>
        <ul className='header-user nowrap'>
          <li>
            <Link to='/members'>
              <span>{userDetails.name}</span>
              <span>{userDetails.identificationNumber}</span>
            </Link>
          </li>
          <li>
            <Link to='/members'>
              <div
                className='profile-picture cover'
                style={{
                  backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4D03AQHrOsT4MdGMyQ/profile-displayphoto-shrink_400_400/0/1644052880866?e=1659571200&v=beta&t=exgLTbA67S5PfPphtXwCVEt5QRA_DwAxQXQ7-xFGFVk')`,
                }}
              />
            </Link>
          </li>
          <li className='responsive-hide'>
            <button className='signout' onClick={logoutHandler} >
              <i className='material-icons'>power_settings_new</i>
            </button>
          </li>
        </ul>
      </div>
      ):(
        <nav
        id='navbar'
        className='navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky'
      >
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <h3 style={{ color: 'white', textTransform: 'none' }}>LucreR</h3>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='mdi mdi-menu' />
          </button>
          {/*end button*/}
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul id='navbar-navlist' className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/market' style={{ borderRight: 'none' }}>
                  Market
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login' style={{ borderRight: 'none' }}>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup' style={{ borderRight: 'none' }}>
                  Signup
                </Link>
              </li>
            </ul>
            {/*END NAVBAR NAV*/}
          </div>
          {/*END COLLAPSE*/}
        </div>
        {/* END CONTAINER */}
      </nav>
      )}

    </div>
  );
});

export default HeaderRight;
