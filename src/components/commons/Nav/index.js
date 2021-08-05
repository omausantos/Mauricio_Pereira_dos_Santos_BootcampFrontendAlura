import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import NavWrapper from './styles/NavWrapper';

const links = [
  {
    texto: 'Sobre Mim',
    url: '/sobre',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
];

export default function Nav() {
  return (
    <NavWrapper>
      <NavWrapper.Container>
        <Logo />
        <NavWrapper.Itens>
          {links.map((link) => (
            <Text
              tag="a"
              key={link.url}
              variant="smallestException"
              href={link.url}
            >
              {link.texto}
            </Text>
          ))}
        </NavWrapper.Itens>
      </NavWrapper.Container>
    </NavWrapper>
  );
}
