import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';


import './css/parent.css'

const Fonts = ({ family, values, fontSizes}) => (
 
      
    <div>
        <GoogleFontLoader
      fonts={[
        {
          font: Object.values({family}).join(',')
        }
      ]}

    />
    <div className="square">
      {family}
      <p>Write something!</p>    
      <p>Writing Sample: [{fontSizes}]</p>
      
      <br/>
      {console.log("THIS IS TEEXXT Stringifys22 "+ JSON.stringify(fontSizes))}
      <p style={{ fontFamily: Object.values({family}).join(','), fontSize: fontSizes}}>{values}</p>
      </div>
    </div>
 
 
);




export default Fonts
