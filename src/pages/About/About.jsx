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
          <h1>Sobre mim</h1>
          <p>
            &nbsp;&nbsp;&nbsp;Olá, meu nome é João Eduardo e sou desenvolvedor web
            Full Stack. Tenho experiência em <span> Django</span>,
            <span> Node.js</span>,<span> Angular</span>,<span> CSS</span>,
            <span> React</span>,<span> Flask</span> e
            também em Devops, <span> Docker</span>,<span> Kubernetes</span>, <span>Zabbix</span> e<span> CI/CD</span>
            .
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; Gosto de aprender coisas novas, e sempre que
            posso aproveito para me manter atualizado sobre as últimas
            tendências e tecnologias no mercado de desenvolvimento web.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; Também sou <span> proativo</span> e gosto de
            trabalhar em equipe, pois acredito que todos podem aprender uns com
            os outros. Acredito também que a <span> comunicação</span> é a chave
            do sucesso para qualquer projeto, desenvolvendo e trabalhando em
            conjunto, pois somos mais fortes juntos.
          </p>
        </Aboutus>
      </InfosC>
    </Container>
  );
}

export default About;