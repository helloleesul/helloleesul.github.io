import styled from '@emotion/styled';
import { SCALE_TRANSITION, TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const ProfileWrapper = styled.div`
  border-radius: 1rem;
  display: flex;
  gap: 2rem;
  padding: 20px 0;

  ${TABLET} {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 800;

  ${TABLET} {
    font-size: 25px;
  }
`;

export const SubTitle = styled.p`
  ${TABLET} {
    font-size: 15px;
  }
`;

export const LinkGroup = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  li {
    font-style: italic;
    font-weight: 800;
    color: ${theme.PALETTE.yellow};
    a {
      height: 30px;
      padding: 0 15px;
      background-color: ${theme.PALETTE.gray500};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 100px;
      span {
        font-size: 12px;
      }
      ${SCALE_TRANSITION}
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
