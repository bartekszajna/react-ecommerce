import styled from 'styled-components';
import { LinkIcon } from '../NavList/styles';
import logoIcons from '../../assets/icons/logoIcons.svg';

export const LogoLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamilies.displayFont}, 'sans-serif';
  color: ${({ theme }) => theme.navbar.primaryColor};
  font-size: 2rem;
  display: flex;
  font-weight: ${({ theme }) =>
    theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};
  align-items: center;
  margin-left: 1rem;

  @media (min-width: 520px) {
    font-size: 2.6rem;
    margin-left: 2rem;
  }

  @media (min-width: 950px) {
    font-size: 3rem;
  }
`;

export const LogoLinkIcon = styled(LinkIcon)`
  background-image: url(${logoIcons});
  background-position: ${({ theme }) => (theme.lightMode ? 'top' : 'bottom')};
  background-size: cover;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;

  @media (min-width: 520px) {
    width: 3.2rem;
    height: 3.2rem;
  }
  @media (min-width: 950px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;
