import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const NavWrapper = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 16px;
  padding-right: 16px;
`;

NavWrapper.Container = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;    
    
    ${breakpointsMedia({
    md: css`
            max-width: ${({ theme }) => theme.breakpoints.md}px;
        `,
  })}
`;

NavWrapper.Itens = styled.div`
    display: flex;
    align-items: center;
    a {
        ${({ theme }) => theme.typographyVariants.paragraph1};
        color: #000;
        text-decoration: none;
        transition: 200ms ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export { NavWrapper as default };
