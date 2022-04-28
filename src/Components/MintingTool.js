import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-go-team-token`,
        metadata: {
          title: "Zoo Ticket",
          description: "Save The Zoo",
          media:
            "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/278642724_3030299980521021_6628247165311104226_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=uzRaZitGLZ8AX_H4Fga&_nc_ht=scontent.fhan3-5.fna&oh=03_AVI-Wg9TR9U5KubtsqZoWed_lFHxsu8GxvO9CC9qDIj3dg&oe=628E2FE8",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {props.userNFTStatus ? null : (
        <div>
          <Button
            style={{ opacity: '1' }}
            className={window.accountId === "" ? 'btn-secondary' : 'btn-warning'}
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
          >
            Mint Ticket
          </Button>
        </div>
      )
      }

      {props.userNFTStatus ? (
        <div style={{}}>
          <p className="text-white text-center">
            Thank you for helping and supporting the operation of the zoo in Ukraine. The NFT ticket is already in your wallet. You can see it{" "}
            <a style={{color: '#ff9900'}} href={"https://wallet.testnet.near.org/?tab=collectibles"}>
              here!
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
