import React from 'react'

const Footer = () => {
  const linkStyle = {
    fontWeight:'500',
    color:' #424242',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
  };

  return (
    <div className="container border-top">
      <div className="row my-5">
        <div className="col m-2">
          <img src='media/images/logo.svg' alt='logo' style={{width:'50%'}}></img>
          <p className='mt-3'>&copy; 2010 - 2025, TradeStock Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col">
          <h5 className='fs-5 footer-head'>Company</h5> <br/>
          <a href="" style={linkStyle} className='footer-list'>Contact us</a>
          <a href="" style={linkStyle} className='footer-list'>Support portal</a>
          <a href="" style={linkStyle} className='footer-list'>Z-Connect blog</a>
          <a href="" style={linkStyle} className='footer-list'>List of charges</a>
          <a href="" style={linkStyle} className='footer-list'>Downloads & resources</a>
          <a href="" style={linkStyle} className='footer-list'>Videos</a>
          <a href="" style={linkStyle} className='footer-list'>Market overview</a>
          <a href="" style={linkStyle} className='footer-list'>How to file a complaint?</a>
          <a href="" style={linkStyle} className='footer-list'>Status of your complaints</a>
        </div>

        <div className="col">
          <h5 className='fs-5 footer-head'>Support</h5> <br/>
          <a href="" style={linkStyle} className='footer-list'>Contact us</a>  
          <a href="" style={linkStyle} className='footer-list'>Support portal</a>  
          <a href="" style={linkStyle} className='footer-list'>Z-Connect blog</a>  
          <a href="" style={linkStyle} className='footer-list'>List of charges</a>  
          <a href="" style={linkStyle} className='footer-list'>Downloads & resources</a> 
          <a href="" style={linkStyle} className='footer-list'>Videos</a>  
          <a href="" style={linkStyle} className='footer-list'>Market overview</a>  
          <a href="" style={linkStyle} className='footer-list'>How to file a complaint?</a>  
          <a href="" style={linkStyle} className='footer-list'>Status of your complaints</a>  
        </div>

        <div className="col">
          <h5 className='fs-5 footer-head'>Account</h5> <br/>
          <a href="" style={linkStyle} className='footer-list'>Open an account</a> 
          <a href="" style={linkStyle} className='footer-list'>Fund transfer</a>  
        </div>
      </div>

      <p className='text-muted footer-para'>
        TradeStock Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633  
        CDSL/NSDL: Depository services through TradeStock Broking Ltd. – SEBI Registration no.: IN-DP-431-2019  
        Commodity Trading through TradeStock Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238  
        Registered Address: TradeStock Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,  
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.  
        For any complaints pertaining to securities broking please write to <a href=''>complaints@tradestock.com</a>,  
        for DP related to <a href=''>dp@tradestock.com</a>.  
        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

      <p className='text-muted footer-para'>
        Procedure to file a complaint on <a href=''>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints:  
        Name, PAN, Address, Mobile, Email ID. Benefits: Effective Communication, Speedy redressal.
      </p>

      <p className='text-muted footer-para'>
        <a href="">Smart Online Dispute Resolution</a> | <a href=''>Grievances Redressal Mechanism</a>
      </p>

      <p className='text-muted footer-para'>
        Investments in securities market are subject to market risks; read documents carefully before investing.
      </p>

      <p className='text-muted footer-para'>
        Attention investors:  
        1) Stock brokers can accept securities as margins only via pledge w.e.f Sep 01, 2020.  
        2) Update email & phone with your broker & receive OTP from depository.  
        3) Check your securities / MF / bonds in NSDL/CDSL consolidated statements monthly.
      </p>

      <p className='text-muted footer-para'>
        "Prevent unauthorised transactions in your account. Update your contact details with your stock broker.  
        Receive transaction alerts from Exchanges at end of the day.  
        KYC is one-time—once done with any SEBI intermediary, no need to repeat with others.  
        Dear Investor, if you subscribe to an IPO, no need to issue a cheque.  
        If anyone claims to be from TradeStock offering trading services, please  
        <a href=''>create a ticket here.</a>"
      </p>

      <div className="footer-graveyard-links text-center">
        <ul>
          <li><a href="">NSE</a></li>
          <li><a href="">BSE</a></li>
          <li><a href="">MCX</a></li>
          <li><a href="">Terms & conditions</a></li>
          <li><a href="">Policies & procedures</a></li>
          <li><a href="">Privacy policy</a></li>
          <li><a href="">Disclosure</a></li>
          <li><a href="">For investor's attention</a></li>
          <li><a href="">Investor charter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
