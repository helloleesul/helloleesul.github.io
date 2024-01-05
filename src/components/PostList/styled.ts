import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';

export const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 50px 0 100px;

  ${TABLET} {
    grid-template-columns: 1fr;
  }
`;
