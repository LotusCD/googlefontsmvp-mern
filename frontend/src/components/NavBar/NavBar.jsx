import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input } from 'reactstrap';

import { UserName } from './UserName'

import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import * as userActions from './../../actions/index';
import { connect } from 'react-redux';


class TheNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      textValue: 'Lorem ipsum',
      fontValue: ''
    };
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);

  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onChange = e => {
    this.props.actions.addText(e.target.value)
  };

  onSearch = e => {
    this.props.actions.searchFont(e.target.value)
  };


  render() {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Fonts Samples</NavbarBrand>
         
          
          <div>
               <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
            />

                <Input
                id='algolia-doc-search'
                placeholder='Search docs'
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={this.onSearch}
                />
                </div>
                
                <Input
                id='algolia-doc-search'
                placeholder='Type something'
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                spellCheck='false'
                onChange={this.onChange}
                />

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>      
           
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log Out
              </Link>

                <UserName/>
   
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    text: state.writeReducer.text,
    font: state.searchReducer.font,
   
  };
}
//dispatch all action in userActionVariable
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TheNavBar);