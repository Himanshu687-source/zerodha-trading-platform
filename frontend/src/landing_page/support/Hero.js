import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className=' p-5 ' id="supportWrapper">
                <h4>Support Portal </h4>
                <a href="#">Track Tickets</a>
            </div>

             <div className='row m-3 align-items-start'>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O, why is my order getting rejected..' className='form-control my-3 p-3' style={{borderRadius:"10px", border:"none", fontSize:"18px"}}></input>
                    <div className='d-flex flex-wrap gap-3 mt-3'>
                        <a href="#" className='me-3 mb-2'>Track account opening</a>
                        <a href="#" className='me-3 mb-2'>Track segment activation</a>
                        <a href="#" className='me-3 mb-2'>Intraday margins</a>
                        <a href="#" className='me-3 mb-2'>Kite user manual</a>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-0'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol style={{lineHeight:"2"}}>
                        <li><a href="#">Surveillance measure on scrips - June 2025</a></li>
                        <li><a href="#">Offer for sale (OFS) – June 2025</a></li>
                    </ol>
                    
                </div>
            </div>
        </section>
     );
}

export default Hero;