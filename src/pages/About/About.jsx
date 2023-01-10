import React, { useEffect, useState } from "react";

import { Container, Aboutus, ImgContainer, InfosC } from "./styles";
import person from "../../assets/p.jpg";

function About() {
  const [scrollY, setScrollY] = useState({
    width: undefined,
  });
  const [position, setPosition] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScrollY({
        width: window.pageYOffset,
      });
    }
    // Monitore o scroll da janela e atualize setScrollY no estado
    window.addEventListener("scroll", handleResize);
    handleResize();

    if (scrollY.width < 90) {
      setPosition(false);
    }

    if (scrollY.width >= 100) {
      setPosition(true);
    }

    return () => window.removeEventListener("scroll", handleResize);
  }, [scrollY.width]);

  return (
    <Container id="about">
      <InfosC position={position}>
        <ImgContainer>
          <img src={person} />
        </ImgContainer>
        <Aboutus>
          <h1>About Me</h1>
          <p>
            &nbsp;&nbsp;&nbsp;Hello!, my name is João Eduardo and I'm a Full Stack web developer. 
            I have experience in <span>Django</span>,<span> Node.js</span>,<span> Angular</span>,<span> CSS</span>,<span> React</span>,<span> Flask </span> 
            and also in Devops, where I've worked with<span> Docker</span>,<span> Kubernetes</span>,<span> Zabbix</span> and<span> CI/CD</span>.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; I like to <span>learn new things</span>, and whenever I can I take the opportunity to <span> keep myself updated</span> on the latest trends and technologies in the <span> web development market</span>.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; I am also <span>proactive</span> and enjoy working in a team, as I believe that everyone can learn from each other. I also believe that <span> communication</span> is the key to the success of any project, developing and working together, because <span> together we are stronger</span>.
          </p>
        </Aboutus>
      </InfosC>
    </Container>
  );
}

export default About;