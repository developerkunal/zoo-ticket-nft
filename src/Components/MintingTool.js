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
            "https://bafybeiay4kdka53t3jayw53amgtqlto4hx3kmdkuknjpm4b2ilxbx6d5pu.ipfs.dweb.link/",
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
