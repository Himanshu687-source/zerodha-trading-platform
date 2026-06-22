import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();
    return (  
        <div className='container mt-5'>
                <div className='row text-center align-items-center'>
               
                 <h1 className='mt-5'>The Zerodha Universe</h1>
                 <p className='mb-5'>
                    Extend your trading and investment experience even further with our partner platforms
                 </p>

                  <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/smallcaseLogo.png" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='Smallcase'/>
                    <p className='text-small text-muted'>Thematic investment platform </p>
                </div>

                <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/zerodhaFundhouse.png" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='Zerodha Fundhouse'/>
                    <p className='text-small text-muted'>Algo & strategy platform </p>
                </div>

                <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/sensibullLogo.svg" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='Sensibull'/>
                    <p className='text-small text-muted'>Options trading platform </p>
                </div>

                  <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/zerodhaFundhouse.png" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='Zerodha Fundhouse'/>
                    <p className='text-small text-muted'>Asset platform </p>
                </div>

                <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/goldenPiLogo.png" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='GoldenPi'/>
                    <p className='text-small text-muted'>Bonds trading platform </p>
                </div>

                <div className='col-6 col-md-4 p-3 mb-4'>
                    <img src="media/images/smallcaseLogo.png" style={{height:"40px", objectFit:"contain", marginBottom:"10px"}} alt='Smallcase'/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>

                <button onClick={() => navigate("/signup")} className='p-2 btn btn-primary fs-5 mb-5 col-10 col-sm-6 col-md-3 mx-auto'>Signup Now</button>

            </div>
        </div>         
    );
}

export default Universe;