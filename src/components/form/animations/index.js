import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const MensagemCadastroWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default function MensagemCadastro({ color, animation, children }) {
  return (
    <MensagemCadastroWrapper>
      <Lottie
        width="60px"
        config={{ animationData: animation, loop: true, autoplay: true }}
      />
      <Text
        tag="p"
        cssinline={{
          color,
          paddingLeft: '8px',
        }}
      >
        {children}
      </Text>
    </MensagemCadastroWrapper>
  );
}

MensagemCadastro.propTypes = {
  color: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  animation: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
