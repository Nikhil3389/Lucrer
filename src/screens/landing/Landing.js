import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Landing = () => {
  const { token } = useSelector((state) => state.authReducer);
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div data-spy='scroll' data-offset='80'>
        {/* <!-- particles --> */}
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: '#0d47a1',
            //   },
            // },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 2.0,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <>
          {/* START NAVBAR */}
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
        </>
        <>
          {/* START HOME */}
          <section id='home' className='home_bg'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 col-sm-12 col-xs-12'>
                  <div className='hero-text'>
                    <h2>Magic internet money - You can't go wrong with the classics.</h2>
                    <p>
                      We offers users a fully operational long-term rental platform. It plans to
                      leverages blockchain technology to ensure seamless rental experience.
                    </p>
                    <div className='home_btn'>
                      <a
                        href='https://electroneum.com/overview-white-paper.pdf'
                        className='btn_one'
                      >
                        Whitepaper
                      </a>
                      <a href='#about' className='btn_two'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                {/*- END COL */}
             
                {/*- END COL */}
              </div>
              {/*- END ROW */}
            </div>
            {/*- END CONTAINER */}
          </section>
        </>
        <>
          {/* START ABOUT */}
          <section className='about_us section-padding'>
            <div className='container'>
              <div className='section-title text-center'>
                <h1>The most trusted cryptocurrency platform</h1>
              
              </div>
              <div className='row'>
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.1s'
                  data-wow-offset={0}
                >
                  <div className='single_about'>
                    <img src='assets/img/icon/secure.png' alt='image' />
                    <h3>Fund your Account</h3>
                    <p>
                      Add Funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.
                    </p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='single_about'>
                    <img src='assets/img/icon/insurance.png' alt='image' />
                    <h3>Protected by Insurance</h3>
                    <p>
                    Complete the identity verification process to secure your account and transction.
                    </p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.3s'
                  data-wow-offset={0}
                >
                  <div className='single_about'>
                    <img src='assets/img/icon/industry.png' alt='image' />
                    <h3>Start Trading</h3>
                    <p>
                      You're good to go! Buy/sell crypto, set up recurring buys for your investment,and discover whar LucreR has to offer.
                    </p>
                  </div>
                </div>
                {/* END COL */}
              </div>
              {/* END ROW */}
            </div>
            {/* END CONTAINER */}
          </section>
        </>
        <>
          {/* START BUY SELL */}
          <section id='buy_sell' className='buy_sell_area section-padding'>
            <div className='container'>
              <div className='section-title text-center'>
                <h1>How to Buy and Sell Cryptocurrency</h1>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.
                </p>
              </div>
              <div className='row'>
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='buy_sell_list'>
                    <img src='assets/img/icon/bank.png' alt='image' />
                    <h4>Bank Transfers</h4>
                    <p>There are many variations of passages of Lorem Ipsum the majority.</p>
                  </div>
                  <div className='buy_sell_list'>
                    <img src='assets/img/icon/wallet.png' alt='image' />
                    <h4>Online Wallets</h4>
                    <p>There are many variations of passages of Lorem Ipsum the majority.</p>
                  </div>
                </div>
                {/*- END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInDown'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='portfolio_list_img'>
                    <img src='assets/img/about-one.png' className='img-fluid' alt='' />
                  </div>
                </div>
                {/*- END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='buy_sell_list'>
                    <img src='assets/img/icon/cash.png' alt='image' />
                    <h4>Cash Payment</h4>
                    <p>There are many variations of passages of Lorem Ipsum the majority.</p>
                  </div>
                  <div className='buy_sell_list'>
                    <img src='assets/img/icon/debit.png' alt='image' />
                    <h4>Debit/Credit Cards</h4>
                    <p>There are many variations of passages of Lorem Ipsum the majority.</p>
                  </div>
                </div>
                {/*- END COL */}
              </div>
              {/*- END ROW */}
            </div>
            {/*- END CONTAINER */}
          </section>
          {/* END BUY SELL */}
        </>
        <>
          {/* START HOW TO BUY */}
          <section className='how_to_buy_area section-padding'>
            <div className='container'>
              <div className='section-title text-center'>
                <h1>Get Started in a Few Minutes</h1>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.
                </p>
              </div>
              <div className='row text-center'>
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='single_how_to_buy'>
                    <img src='assets/img/icon/man.png' alt='image' />
                    <h4>Create Account</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.3s'
                  data-wow-offset={0}
                >
                  <div className='single_how_to_buy'>
                    <img src='assets/img/icon/bank2.png' alt='image' />
                    <h4>Link Your Bank Account</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-4 col-sm-12 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.4s'
                  data-wow-offset={0}
                >
                  <div className='single_how_to_buy'>
                    <img src='assets/img/icon/buy.png' alt='image' />
                    <h4>Start Buying &amp; Selling</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </p>
                  </div>
                </div>
                {/* END COL */}
              </div>
              {/* END ROW */}
            </div>
            {/* END CONTAINER */}
          </section>
        </>
        <>
          {/* START ABOUT US CONTENT */}
          <section id='about' className='about_area section-padding'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-sm-12 col-xs-12 wow fadeInLeft'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='about-img'>
                    <img src='assets/img/about-two.png' className='img-fluid' alt='about-image' />
                  </div>
                </div>
                {/*- END COL */}
                <div
                  className='col-lg-6 col-sm-12 col-xs-12 wow fadeInRight'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='about-text'>
                    <h2>
                      Build the future <br />
                      of finance
                    </h2>
                    <p className='about-bold'>
                      We offers users a fully operational long-term rental platform. It plans to
                      leverages blockchain technology to ensure embarrassing hidden seamless.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable. If you are going
                      to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <div className='about_btn'>
                    <a
                      href='https://www.youtube.com/watch?v=CMPebxJjE8o'
                      className='video-play btn_one'
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
                {/*- END COL */}
              </div>
              {/*- END ROW */}
            </div>
            {/*- END CONTAINER */}
          </section>
        </>
        <>
          {/* START TOKEN SALE */}
          <section id='token_sale' className='token_sale_area section-padding'>
            <div className='container'>
              <div className='section-title text-center'>
                <h1>Pre sale &amp; Values</h1>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.
                </p>
              </div>
              <div className='row text-center'>
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.2s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_one'>
                    <h4>Start Time</h4>
                    <p>July 30,2022 (10:00 GMT)</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.3s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_two'>
                    <h4>Tokens for sale</h4>
                    <p>900,000 ICC (9%)</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.4s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_three'>
                    <h4>Acceptable Currency</h4>
                    <p>BTC, ETH, LTC</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.5s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_four'>
                    <h4>End Time</h4>
                    <p>Oct 30,2022 (10:00 GMT)</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.6s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_five'>
                    <h4>Soft Cops</h4>
                    <p>$90 M</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.6s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_six'>
                    <h4>Exchange rate</h4>
                    <p>1 BTC = 1940 ICC </p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.7s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_seven'>
                    <h4>Available Token</h4>
                    <p>$100 M</p>
                  </div>
                </div>
                {/* END COL */}
                <div
                  className='col-lg-3 col-sm-4 col-xs-12 wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='0.7s'
                  data-wow-offset={0}
                >
                  <div className='single_token single_token_bg_eight'>
                    <h4>Minimal Transction</h4>
                    <p>1BTC/1ETH/1LTC</p>
                  </div>
                </div>
                {/* END COL */}
              </div>
              {/* END ROW */}
            </div>
            {/* END CONTAINER */}
          </section>
        </>
        <section className='token_img_area section-padding'>
          <div className='container'>
            <div className='section-title text-center'>
              <h1>Token Management</h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.
              </p>
            </div>
            <div className='row text-center'>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset={0}
              >
                <div className='token-img'>
                  <img src='assets/img/02-Chat.png' className='img-fluid' alt='' />
                  <h4>Token Distribution</h4>
                </div>
              </div>
              {/*- END COL */}
              <div
                className='col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.3s'
                data-wow-offset={0}
              >
                <div className='fund-img'>
                  <img src='assets/img/01-Chat.png' className='img-fluid' alt='' />
                  <h4>Fund Distribution</h4>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        <>
          <>
            {/* START DOWNLOAD APP */}
            <section id='download' className='download_area section-padding'>
              <div className='container'>
                <div className='row'>
                  <div
                    className='col-lg-7 col-sm-12 col-xs-12 wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='0.2s'
                    data-wow-offset={0}
                  >
                    <div className='app-text'>
                      <h2>Install LucreR app today</h2>
                      <p>
                        We offers users a fully operational long-term rental platform. It plans to
                        leverages blockchain technology to ensure seamless rental experience and
                        wants to help tenants unfreeze millions of dollars tied up in rental.
                      </p>
                      <ul>
                        <li>
                          <span className='ti-download' />
                          Download It for Free
                        </li>
                        <li>
                          <span className='ti-package' />
                          Install App
                        </li>
                        <li>
                          <span className='ti-user' />
                          Create Profile
                        </li>
                        <li>
                          <span className='ti-cup' />
                          Enjoy this app
                        </li>
                      </ul>
                    </div>
                    <div className='app_btn'>
                      <a href='#' className='btn_one wow bounceIn' data-wow-delay='.3s'>
                        <i className='fa fa-apple' />
                        App Store
                      </a>
                      <a href='#' className='btn_two wow bounceIn' data-wow-delay='.4s'>
                        <i className='fa fa-play' />
                        Google Play
                      </a>
                    </div>
                  </div>
                  {/* END COL */}
                  <div
                    className='col-lg-5 col-sm-12 col-xs-12 wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='0.3s'
                    data-wow-offset={0}
                  >
                    <div className='app_img'>
                      <img src='assets/img/app-mockup.png' className='img-fluid' alt='' />
                    </div>
                  </div>
                  {/* END COL */}
                </div>
                {/* END ROW */}
              </div>
              {/* END CONTAINER */}
            </section>
            {/* END DOWNLOAD APP */}
          </>

      
     
      
       
          {/* START FOOTER */}
          <div className='footer'>
            <div className='container'>
              <div className='row text-center'>
                <div className='col-lg-12 col-sm-12 col-xs-12'>
                  <div className='footer_menu'>
                    <ul>
                      <li>
                        <a href='#home'>Home</a>
                      </li>
                      <li>
                        <a href='#'>Terms of use</a>
                      </li>
                      <li>
                        <a href='#'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='#'>Cookie Policy</a>
                      </li>
                      <li>
                        <a href='#contact'>Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className='footer_copyright'>
                    <p>© 2022 Crptiam. All Rights Reserved.</p>
                  </div>
                  <div className='footer_profile'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-pinterest' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*- END COL */}
              </div>
              {/*- END ROW */}
            </div>
            {/*- END CONTAINER */}
          </div>
          {/* END FOOTER */}
        </>
      </div>
    </>
  );
};

export default Landing;
