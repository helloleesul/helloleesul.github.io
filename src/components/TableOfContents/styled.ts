import styled from '@emotion/styled';

export const TOCWrapper = styled.nav`
  #table-on-contents {
    position: sticky;
    top: 3rem;

    > p {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 1rem;
    }

    div {
      ul,
      li {
        list-style: none;
        padding: 0;
        font-size: 14px;
      }
      a {
        margin-bottom: 0.5rem;
        display: block;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
