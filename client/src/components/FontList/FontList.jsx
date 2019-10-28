import React from 'react';
import { connect } from 'react-redux';


import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button , Row, Col, CardSubtitle } from 'reactstrap';


import Fonts from './Fonts'

import './css/parent.css'



const FontList = ({ data, text, font, user }) => (
  
    <div className="parent">     
      {console.log("THIS IS TEEXXT Stringify "+ JSON.stringify(user))}
      {data
      .filter(({ family }) =>
        `${family}`
          .toUpperCase()
          .includes(font.toUpperCase())
      )

      .map(({ id, family, category }) => (
              <Fonts key={id} family={family} category={category} values={text} test={user} />   
      ))}
    </div>
  );

const mapStateToProps = state => {
  return {
    data: state.data,
    text: state.writeReducer.text,
    font: state.searchReducer.font,
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  null
)(FontList);