import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from './images/Rectangle 7.png'
import trustedBy3 from '../images/Rectangle 8.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'

const Section5Cards = (prop) => {
    return (
        <div className='m-l-20'>
            <div className= {!prop.r &&' position-relative'} style={{height:!prop.r&&'350px', width:!prop.r&&'230px'}}>
            <img  src = {prop.images} style={{height:!prop.r&&'350px', width:prop.r?'150px':'230px'}}/>
            {!prop.r&&<img className='position-absolute'  src = {trustedBy3} style={{height:'149px', width:!prop.r&&'230px'}}/>}


               {!prop.r &&<div className='position-absolute m-t-20 further color-w'>
                    <h4 className='color-w medium-size2'>Create Amazing</h4>
                    <h4 className='color-w medium-size2'>Websites</h4>
                <h3 className='m-t-20 color-w medium-size2 bold'>{prop.type}</h3>

                </div>}
            </div>
        </div>
    )
}
export default Section5Cards;
