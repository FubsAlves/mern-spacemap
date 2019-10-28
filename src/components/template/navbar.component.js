import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import blackhole from "../assets/images/blackhole3.png";




class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
      <MDBNavbar className="sticky-top" color="elegant-color-dark" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav middle="true">
            <MDBNavItem>
              <MDBNavLink to="/">Constelações</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Galáxias</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav middle="true">
            <MDBNavItem>
              <MDBNavLink to="#!"><img src={blackhole} className="logo" alt=""/></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav middle="true">
            <MDBNavItem>
              <MDBNavLink to="#!">Estrelas</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Nebulosas</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default Navbar;