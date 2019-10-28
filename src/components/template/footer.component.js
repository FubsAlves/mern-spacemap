import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="purple darken-3" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;