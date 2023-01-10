import React from "react";
import { HomeContainer, Texts, DivButton, LinkedinButton } from "./styles";
import giphy from "../../assets/giphy.gif";
import { IoLogoLinkedin } from "react-icons/io5";
import curriculum from "../../assets/CurriculoDEV.pdf";
import ButtonDownload from "../../components/ButtonDownload/ButtonDownload";

function Home() {
  return (
    <>
      <HomeContainer id="home">
        <Texts>
            <h2>Hello, I am</h2>

          <h1>João Eduardo Braga</h1>

          <DivButton>
            <ButtonDownload
              href={curriculum}
              download={"CurriculoDEV"}
              text="Download CV"
              color={"white"}
              backgroundColor={"white"}
            />
            <LinkedinButton
              target="_blank"
              href="https://www.linkedin.com/in/joão-eduardo-braga/"
            >
              Linkedin <IoLogoLinkedin />
            </LinkedinButton>
          </DivButton>
        </Texts>
        <img src={giphy} />
      </HomeContainer>
    </>
  );
}

export default Home;
