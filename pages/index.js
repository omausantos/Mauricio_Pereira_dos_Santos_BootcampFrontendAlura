import React from 'react';
import Capa from '../src/components/commons/Capa';
import Text from '../src/components/foundation/Text';
import Nav from '../src/components/commons/Nav';
import Footer from '../src/components/commons/Footer';
import Projetos from '../src/components/commons/Projetos';
import Formulario from '../src/components/form';

const cards = [
  {
    numberitem: 'teste 01',
    title: 'Projeto report',
    img: '/images/projects/time-management.jpg',
    destaque: 'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!',
    cssinline: {
      textAlign: {
        xs: 'center',
        md: 'left',
      },
    },
  },
  {
    numberitem: 'teste 02',
    title: 'Projeto report',
    img: '/images/projects/annual-report.jpg',
    destaque: false,
    cssinline: {
      textAlign: 'center',
    },
  },
  {
    numberitem: 'teste 03',
    title: 'Projeto report',
    img: '/images/projects/time-management.jpg',
    destaque: false,
    cssinline: {
      textAlign: 'center',
    },
  },
  {
    numberitem: 'teste 04',
    title: 'Projeto report',
    img: '/images/projects/annual-report.jpg',
    destaque: false,
    cssinline: {
      textAlign: 'center',
    },
  },
];

export default function Home() {
  const [isFormOpen, setFormState] = React.useState(false);

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
            <Projetos.Card key={card.numberitem} destaque={card.destaque}>
              <Projetos.CardContainer destaque={card.destaque}>
                {card.destaque ? <Projetos.CardDestaque /> : ''}
                <Projetos.CardImage destaque={card.destaque}>
                  <img src={card.img} alt="" />
                </Projetos.CardImage>
                <Projetos.CardInfo destaque={card.destaque}>
                  <Projetos.CardTitle cssinline={card.cssinline}>
                    <Text
                      tag="a"
                      href="#"
                    >
                      {card.title}
                    </Text>
                  </Projetos.CardTitle>
                  <Projetos.CardText>
                    {card.destaque}
                  </Projetos.CardText>
                </Projetos.CardInfo>

              </Projetos.CardContainer>
            </Projetos.Card>
          ))}

        </Projetos.List>
        <Projetos.LinkForm
          onOpen={() => {
            setFormState(true);
          }}
        />
      </Projetos.Wrapper>
      <Footer />
      {isFormOpen && <Formulario onClose={() => { setFormState(false); }} />}
    </>
  );
}
