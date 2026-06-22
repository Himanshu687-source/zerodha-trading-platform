import React from 'react';

function LeftSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore}) {
    return (  
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img src={imageURL} className='img-fluid' alt={productName}/>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                 <div>  
                    <a href={tryDemo} className='me-4'>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-4 d-flex flex-wrap gap-3'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play"/></a>
                    <a href={appStore}><img  src="media/images/appstoreBadge.svg" alt="App Store"/></a>
                </div>     
                </div>
            </div>
        </div>
    );
}

export default LeftSection;