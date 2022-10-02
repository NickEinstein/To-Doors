import React from 'react';
import ReactDOM from 'react-dom';
import './vectorCard.css'
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
// import "antd/lib/card/style/index.css";
import { Card, CardActions,Button,Typography, CardContent } from '@mui/material';


const VectorCards = (prop) => {
    return (
        <div >

<Card 
    
className='flex-center py-2 px-5 vectorcard'
// sx={{ maxWidth: 220 }}
>
      <CardContent className=' flex-center text-center'>
      
       
         <div>
             <div className=' flex-center pb-8'>{prop.image}</div>
                     <p>{prop.text}</p>
         </div>
      </CardContent>
      
    </Card>
   
           
            </div>
        
    )
}
export default VectorCards;
