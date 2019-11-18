import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import constellation from './assets/images/constellation.jpg';
import galaxy from './assets/images/galaxy.jpg';
import star from './assets/images/star.jpg';
import nebula from './assets/images/nebula.jpg';


const CardNebula = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={nebula} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <Link to='/nebulosas'><MDBBtn>Nebulosas</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

const CardGalaxy = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={galaxy} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
            <Link to='/galaxias'><MDBBtn >Galáxias</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

const CardStar = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={star} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
            <Link to='/estrelas'><MDBBtn>Estrelas</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

const CardConstellation = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={constellation} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <Link to='/constelacoes'><MDBBtn>Constelações</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default class Index extends Component {
 
  render() {
    return (
      <MDBContainer>
          <MDBRow className="my-4 d-flex">
              <MDBCol size="6" className="d-flex"><CardConstellation/></MDBCol>
              <MDBCol size="6" className="d-flex"><CardGalaxy/></MDBCol>
          </MDBRow>
          <MDBRow className="my-4">
              <MDBCol size="6" className="d-flex"><CardStar/></MDBCol>
              <MDBCol size="6" className="d-flex"><CardNebula/></MDBCol>
          </MDBRow>
      </MDBContainer>
          
          
        
    )
  }
}