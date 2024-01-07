import styled from '@emotion/styled';
import theme from '~/styles/theme';

export const ArticleWrapper = styled.div`
  display: flex;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${theme.PALETTE.gray300}
  gap: 15rem;
  > * {
    flex: 1;
    &:hover {
      text-decoration: underline;
    }
    > div {
      font-weight: bold;
      margin-bottom: 0.5rem;
      span {
        display: inline-block;
        margin: 0 1rem;
      }
    }
  }
  .prev {
    text-align: left;
  }
  .next {
    text-align: right;
  }
`;
