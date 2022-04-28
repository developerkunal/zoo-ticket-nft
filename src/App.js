import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";

// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Card, Alert } from "react-bootstrap";

// Custom Components
import MintingTool from "./Components/MintingTool";
import InfoBubble from "./Components/InfoBubble";

// assets
import Logo from "./assets/logo-white.svg";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);

  useEffect(() => {
    const receivedNFT = async () => {
      console.log(
        await window.contract.check_token({
          id: `${window.accountId}-go-team-token`,
        })
      );
      if (window.accountId !== "") {
        console.log(
          await window.contract.check_token({
            id: `${window.accountId}-go-team-token`,
          })
        );

        setuserHasNFT(
          await window.contract.check_token({
            id: `${window.accountId}-go-team-token`,
          })
        );
      }
    };
    receivedNFT();
  }, []);

  return (
    <React.Fragment>
      <div style={{
        height: '100vh',
        width: '100%',
        backgroundImage: 'url("https://i.pinimg.com/originals/47/43/00/4743009f377a2d7ff7640387d1e83df3.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}>
        <Navbar variant='dark' style={{ backgroundColor: 'rgba(89, 119, 112, 0.6)'}}>
          <Container>
            <Navbar.Brand href='#home'>
              <img
                alt=''
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/277253690_3158413987753472_7948198355208740389_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=OqvIeAGne54AX8Akkdh&_nc_ht=scontent.fhan3-5.fna&oh=03_AVKZ5qAew1fmJL2fIlepTwidZIhhMkC7VibpVfCHSPq7bQ&oe=6290EC4B"
                height='45'
                className='d-inline-block align-top'
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link
                  style={{opacity: '1',color: '#ffffff', fontSize: '23px'}}
                  onClick={window.walletConnection.isSignedIn() ? logout : login}
                >
                  {window.walletConnection.isSignedIn()
                    ? "Log out"
                    : "Login"}
                </Nav.Link>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="d-flex flex-column align-items-center" style={{ marginTop: "3vh" }}>
          <div className="w-75 d-flex flex-column align-items-center p-5">
            <h2 style={{ textShadow: '2px 2px 5px  #000000', color: '#ffffff' }}>Welcome <b style={{color: '#ff9900'}}>{window.accountId || ''}</b>!!!</h2>
            <h1 style={{ textShadow: '2px 2px 5px  #000000', color: '#ffffff' }}>THE <span style={{color: '#ff9900'}}>ZOO TICKET</span> MINT!</h1>
            <h3 style={{ textShadow: '1px 1px 3px #ffffff'}}>Find out <a style={{color: '#ff9900',textShadow: '1px 1px 3px #000000'}}  href="https://medium.com/@thuyngoc.ftu97/ukraine-zoo-launch-party-on-the-metaverse-28526fc54a2c">more</a></h3>
          </div>
          <div className="w-75 d-flex border border-warning rounded"
                style={{backgroundColor: 'rgba(12, 70, 19, 0.863)',
                        height: '300px'}}>
            <div className="w-50 text-white d-flex flex-column align-items-center pt-3"
                  style={{position: 'relative'}}>
              <h2 className="fw-bold">The Zoo Metaverse</h2>
              <p className="fw-bold" style={{zIndex:'99'}}>Come visit the zoo in the virtual world with us</p>
              <p className="fw-bold" style={{zIndex:'99'}}>Just making your way in The ZooVerse</p>
              <img 
              style={{width: '100%', position: 'absolute', bottom: '0'}}
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/278733126_1123002864938179_2268130547181017847_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=2sg4dMJjQF8AX9DxRBI&_nc_ht=scontent.fhan4-3.fna&oh=03_AVKSlocCgishFsjyIIoTFZltf3wiSYQitODM1I42tl5gNA&oe=628D6601"/>
            </div>
            <div className="w-50 d-flex flex-column align-items-center p-3">
              <img className="w-100 rounded mb-3" src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/278642724_3030299980521021_6628247165311104226_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=uzRaZitGLZ8AX_H4Fga&_nc_ht=scontent.fhan3-5.fna&oh=03_AVI-Wg9TR9U5KubtsqZoWed_lFHxsu8GxvO9CC9qDIj3dg&oe=628E2FE8" />
              <p style={{color: '#ff9900'}}>SAVE UKRAINE, SAVE THE ZOO</p>
              <MintingTool userNFTStatus={userHasNFT} />
            </div>
          </div>
        </Container>
      </div >
    </React.Fragment>
  );
}
