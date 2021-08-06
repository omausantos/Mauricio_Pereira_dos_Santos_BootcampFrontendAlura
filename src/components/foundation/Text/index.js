import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cssInline from '../../../theme/utils/cssInline';

const TextBase = styled.span`
    ${cssInline};
    ${({ variant, theme }) => theme.typographyVariants[variant]}
`;

export default function Text({
  children, tag, variant, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >

      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['titleXL', 'subTitleXL', 'paragraph1', 'smallestException']),
  children: PropTypes.node.isRequired,
};
