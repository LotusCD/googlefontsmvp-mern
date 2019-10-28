import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';


import './css/parent.css'

const Fonts = ({ family, values}) => (
 
      
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
      
      Writing Sample:
      <br/><br/>
      <p style={{ fontFamily: Object.values({family}).join(',') }}>{values}</p>
      </div>
    </div>
 
 
);




export default Fonts
