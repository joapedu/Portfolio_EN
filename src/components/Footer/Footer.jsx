import React from "react";
import { FooterDiv, Redes } from "./style";
import { ImWhatsapp, ImLinkedin2 } from "react-icons/im";

function Footer() {
  return (
    <FooterDiv>
      <span>Made by João Eduardo Braga </span>
      <Redes>
        <a target="_blank" href="https://wa.me/5584981480327">
          <ImWhatsapp
            style={{
              color: "#FFF",
              backgroundColor: "#26D366",
              padding: ".3rem",
              borderRadius: "10px",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/joão-eduardo-braga//" target="_blank">
          <ImLinkedin2
            style={{
              color: "#FFF",
              backgroundColor: "#0A66C2",
              padding: ".3rem",
              borderRadius: "10px",
            }}
          />
        </a>
      </Redes>
    </FooterDiv>
  );
}

export default Footer;