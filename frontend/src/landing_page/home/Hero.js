import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
     const navigate = useNavigate();
    return (  
         <div className='container p-5 mb-5' >
            <div className='row text-center'>
                 <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                 <h1 className='mt-5'>Invest in everything</h1>
                 <p>Online platform to invest in stocks,derivatives,mutual funds, and more</p>
                 <button onClick={() => navigate("/signup")} className='p-2 btn btn-primary fs-5 mb-5 col-10 col-sm-6 col-md-3 mx-auto'>Signup Now</button>
            </div>
         </div>
    );
}

export default Hero;