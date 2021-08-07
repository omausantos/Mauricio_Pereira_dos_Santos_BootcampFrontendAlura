import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Base = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
    
  ${breakpointsMedia({
    xs: css`
            background: url('/images/plant-left-mobile.jpg') left top no-repeat, url('/images/plant-right-mobile.jpg') right bottom no-repeat; 
        `,
    md: css`
            background: url('/images/plant-right-desktop.png') right bottom no-repeat, url('/images/plant-left-desktop.jpg') left top no-repeat;
        `,
  })};  
`;

const Container = styled.header`
  margin: auto;
  text-align: center;
`;

const Capa = {
  Base,
  Container,
};

export { Capa as default };
