import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const Background = styled.div`
  ${TABLET} {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  background-color: ${theme.PALETTE.gray100};
  border-radius: 1rem;

  color: ${theme.PALETTE.gray500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 20px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  ${TABLET} {
    font-size: 15px;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  ${TABLET} {
    font-size: 25px;
  }
`;
