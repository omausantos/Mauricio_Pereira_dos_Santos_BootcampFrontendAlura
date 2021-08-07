import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import cssInline from '../../../theme/utils/cssInline';

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 100%;

    ${breakpointsMedia({
    md: css`
            max-width: ${({ theme }) => theme.breakpoints.md}px;
        `,
  })}
`;

const List = styled.div` 
    ${breakpointsMedia({
    md: css`
            margin-left: -8px;
            margin-right: -8px;
            display: flex;
            flex-wrap: wrap;
        `,
  })}
`;

const Card = styled.div`
    margin-bottom: 32px;
    padding-right: 8px;
    padding-left: 8px;    
    ${cssInline};
    ${breakpointsMedia({
    md: css`
            width: 33.33%;
        `,
  })};

    ${({ destaque }) => {
    if (destaque) {
      return breakpointsMedia({
        md: css`
                width: 100%;
                order: 4;
            `,
      });
    }
    return '';
  }}

`;

const CardContainer = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.primary};
    ${({ destaque }) => {
    if (destaque) {
      return breakpointsMedia({
        md: css`
                display: flex;
                justify-content: space-between;
            `,
      });
    }
    return '';
  }};
`;

const CardImage = styled.div`
    display: flex;
    align-items: center;
    ${breakpointsMedia({
    xs: css`
                height: 177px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            `,
    md: css`                
                flex-direction: column;
                height: 330px;
                img {
                    width: auto;
                    height: 100%;
                }
            `,
  })};
  ${({ destaque }) => {
    if (destaque) {
      return breakpointsMedia({
        md: css`
                width: calc(67% - 8px);
            `,
      });
    }
    return '';
  }};
    
`;

const CardTitle = styled.h3`
    ${cssInline};
    ${breakpointsMedia({
    xs: css`
                font-size: 24px;
                font-weight: 700;
            `,
    md: css`                
                font-size: 32px;
            `,
  })};
    a {
        color: #000;        
        text-decoration: none;
        font: inherit;
    }
`;

const CardText = styled.p`
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    padding-right: 16px;
    display: none;
    ${breakpointsMedia({
    md: css`
            display: block;
        `,
  })}
`;

const CardDestaqueWrapper = styled.div`
    position: absolute;
    margin-left: 4px;
    margin-top: 5px;
    padding-left: 28px;
    padding-right: 28px;
    border: solid 1px #000;
    background-color: #fff;
    font-size: 24px;
    font-weight: 300;
`;
const CardDestaque = () => (
  <CardDestaqueWrapper>
    Destaque
  </CardDestaqueWrapper>
);

const CardInfo = styled.div`
${({ destaque }) => {
    if (destaque) {
      return breakpointsMedia({
        md: css`
                width: calc(33% - 8px);
            `,
      });
    }
    return '';
  }};

`;

const Projetos = {
  Wrapper,
  List,
  Card,
  CardContainer,
  CardInfo,
  CardImage,
  CardTitle,
  CardText,
  CardDestaque,
};

export { Projetos as default };
