import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();
    return ( 
         <div className='container p-5 mb-5' >
            <div className='row text-center'>
                 
                 <h1 className='mt-5'>Open a Zerodha account</h1>
                 <p>Modern platform and apps, ₹0 investments, and flat ₹20 Intraday and F&O trades.</p>
                 <button onClick={() => navigate("/signup")} className='p-2 btn btn-primary fs-5 mb-5 col-10 col-sm-6 col-md-3 mx-auto'>Signup Now</button>
            </div>
         </div>
      );
}

export default OpenAccount;