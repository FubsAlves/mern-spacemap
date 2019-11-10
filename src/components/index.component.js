import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';


const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default class Index extends Component {
 
  render() {
    return (
      <MDBContainer>
          <MDBRow className="my-4">
              <MDBCol size="6"><CardExample/></MDBCol>
              <MDBCol size="6"><CardExample/></MDBCol>
          </MDBRow>
          <MDBRow className="my-4">
              <MDBCol size="6"><CardExample/></MDBCol>
              <MDBCol size="6"><CardExample/></MDBCol>
          </MDBRow>
      </MDBContainer>
          
          
        
    )
  }
}