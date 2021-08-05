import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Text from '../src/components/foundation/Text';
import Nav from '../src/components/commons/Nav';
import Footer from '../src/components/commons/Footer';

const WrapperProjetos = styled.div`
    text-align: center;
`;

export default function Home() {
  return (
    <>
      <Capa.Base>
        <Capa.Container>
          <Text
            tag="h1"
            variant="titleXL"
            cssinline={{
              textTransform: 'uppercase',
              marginBottom: '0',
            }}
          >
            Mauricio Santos
          </Text>
          <Text
            tag="h2"
            variant="subTitleXL"
            cssinline={{
              marginTop: '0',
              lineHeight: '0.9',
            }}
          >
            Portfolio
          </Text>
        </Capa.Container>
        <Nav />
      </Capa.Base>
      <WrapperProjetos>
        WrapperProjetos
      </WrapperProjetos>
      <Footer />
    </>
  );
}
