import { memo } from 'react';
import { Link } from 'react-router-dom';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
      </Link>
    </div>
    <h3>Menu</h3>
    <ul>
      <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='deposit-pull' />
      </li>
      <li>
        <NavbarButton url='/wallet' icon='account_balance_wallet' title='my wallet' />
      </li>
      <li>
        <NavbarButton url='/transactions' icon='sync' title='Transactions' />
      </li>
      <li>
        <NavbarButton url='/trading' icon='paid' title='Trade' />
      </li>
      <li>
        <NavbarButton url='/exchange' icon='account_balance' title='Takas' />
      </li>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Market' />
      </li>
    </ul>
    <h3>Others</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='Profile' />
      </li>
      <li>
        <NavbarButton url='/contacts' icon='contacts' title='Persons' />
      </li>
      <li>
        <NavbarButton url='/messages' icon='chat' title='Messages' />
      </li>
      <li>
        <NavbarButton url='/settings' icon='settings' title='Settings' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>Crypto Exchange</strong>
      <p>
        2021 &copy; All rights reserved.
        <br />
        <br />
        Made with <span>❤</span> by Nikhil
      </p>
    </div>
  </nav>
));

export default Navbar;
