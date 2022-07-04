import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Box from '../../components/Common/Box';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const DashboardScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='deposit-pull' />
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <BankProcess />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; From all your individual, current, Turkish Lira accounts opened in your name,
              Remittance to listed accounts/You can perform EFT transaction.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
          </div>
        </Box>
      </div>
    </div>
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <RecentActivity />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
            <p>
              &bull; Recipient in EFT transfers/Writing Crypto Exchange in the beneficiary part
              required.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;
