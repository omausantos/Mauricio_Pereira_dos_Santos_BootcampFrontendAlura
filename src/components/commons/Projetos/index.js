import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

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
    display: grid;
    flex-wrap: wrap;
    flex-direction: column;

    ${breakpointsMedia({
    md: css`
            margin-left: -16px;
            margin-right: -16px;
            display: flex;
            flex-wrap: wrap;
        `,
  })}
`;

const Card = styled.div`
    margin-bottom: 32px;
    padding-right: 16px;
    padding-left: 16px;
    height: auto;
    ${({ order }) => css`
        order: ${order};
    `};

`;

const CardContainer = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.primary};
`;

const CardImage = styled.div`
    img {
        width: 100%;
        vertical-align: bottom;
    }
`;

const CardTitle = styled.h3`
    text-align: center;    
    a {
        color: #000;
        font-weight: 700;
        text-decoration: none;
        font-size: 24px;
    }
`;

const CardText = styled.div``;

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

const Projetos = {
  Wrapper,
  List,
  Card,
  CardContainer,
  CardImage,
  CardTitle,
  CardText,
  CardDestaque,
};

export { Projetos as default };
