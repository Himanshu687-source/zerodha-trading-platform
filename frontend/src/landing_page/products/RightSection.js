import React from 'react';

function RightSection({imageURL,productName,productDesription,tryDemo,learnMore}) {
    return (  
              <div className='container mt-5'>
                <div className='row align-items-center'>
               
                <div className='col-12 col-md-6 order-2 order-md-1 p-3 p-md-5 mt-md-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                 <div>  
                    <a href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>     
                </div>
                 <div className='col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0'>
                    <img src={imageURL} className='img-fluid' alt={productName}/>
                </div>
            </div>
        </div>                                  
    );
}

export default RightSection;