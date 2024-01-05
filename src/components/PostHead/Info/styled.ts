import styled from '@emotion/styled';
import { RoundItem, TABLET } from '~/styles/common';

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 800;

  ${TABLET} {
    font-size: 30px;
  }
`;

export const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CategoryItem = styled.li`
  ${RoundItem}
`;

export const Date = styled.span`
  ${RoundItem}
  font-family: system-ui, sans-serif;
  margin-right: 1rem;
`;
