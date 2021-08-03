import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


const Header = styled.header`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('/images/plant-left-mobile.jpg') left top no-repeat, url('/images/plant-right-mobile.jpg') right bottom no-repeat;
  border-bottom: 2px solid #E9C46A;
  h1 {
    ${({ theme }) => theme.typographyVariants.titleXL}
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0;    
  }
  h2 {
    ${({ theme }) => theme.typographyVariants.subTitleXL}
    margin-top: 0;
    line-height: normal;    
  }
`;

export default function Home() {
  return (
    <>
      <Header>
        <h1>Mary Elizabeth</h1>
        <h2>Portfolio</h2>
      </Header>
      <h2>Aqui será o menu</h2>
    </>
  )
}
