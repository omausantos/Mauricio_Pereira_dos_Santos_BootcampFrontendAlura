import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
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
const LinkFormWrapper = styled.div`
  text-align: center;
  ${breakpointsMedia({
    xs: css`
            font-size: 32px;
            `,
    md: css`                
            font-size: 36px;
            `,
  })};
  p {
    margin:0;
  }
  svg {
    margin: 8px 0 40px;
    cursor: pointer;
  }
`;

const LinkForm = ({ onOpen }) => (
  <LinkFormWrapper>
    <p>
      Entre em contato
    </p>
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        onOpen();
      }}
    >
      <circle cx="23" cy="23" r="22.5" stroke="#E9C46A" />
      <path d="M24.592 16.432V21.424H29.424V25.328H24.592V30.32H20.4V25.328H15.536V21.424H20.4V16.432H24.592Z" fill="black" />
    </svg>
  </LinkFormWrapper>
);

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
  LinkForm,
};

export { Projetos as default };

LinkForm.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
