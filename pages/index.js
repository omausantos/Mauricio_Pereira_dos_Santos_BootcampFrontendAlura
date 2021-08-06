import React from 'react';
import Capa from '../src/components/commons/Capa';
import Text from '../src/components/foundation/Text';
import Nav from '../src/components/commons/Nav';
import Footer from '../src/components/commons/Footer';
import Projetos from '../src/components/commons/Projetos';

const cards = [
  {
    title: 'Projeto report 1',
    img: '/images/projects/image-01.jpg',
    order: 1,
    destaque: false,
  },
  {
    title: 'Projeto report 2',
    img: '/images/projects/image-01.jpg',
    order: 1,
    destaque: false,
  },
  {
    title: 'Projeto report 3',
    img: '/images/projects/image-01.jpg',
    order: 1,
    destaque: false,
  },
  {
    title: 'Projeto report Destaque',
    img: '/images/projects/image-01.jpg',
    order: -1,
    destaque: true,
  },
];

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
      <Projetos.Wrapper>
        <Text
          tag="h2"
          cssinline={{
            textTransform: 'uppercase',
            fontSize: {
              xs: '36px',
              md: '60px',
            },
            textAlign: 'center',
            width: '100%',
          }}
        >
          Meus projetos
        </Text>

        <Projetos.List>

          {cards.map((card) => (
            <Projetos.Card key={card.title} order={card.order}>
              <Projetos.CardContainer>
                {card.destaque ? <Projetos.CardDestaque /> : ''}
                <Projetos.CardImage>
                  <img src={card.img} alt="" />
                </Projetos.CardImage>
                <Projetos.CardTitle>
                  <Text
                    tag="a"
                    href="#"
                    cssinline={{
                      textAlign: 'center',
                    }}
                  >
                    {card.title}
                  </Text>
                </Projetos.CardTitle>

              </Projetos.CardContainer>
            </Projetos.Card>
          ))}

        </Projetos.List>

      </Projetos.Wrapper>
      <Footer />
    </>
  );
}
