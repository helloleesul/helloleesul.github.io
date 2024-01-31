import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { RoundItem, SCALE_TRANSITION, TABLET } from '~/styles/common';

type GatsbyLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

export const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
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

  ${TABLET} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
`;

export const Date = styled.span`
  ${RoundItem}
  font-family: system-ui, sans-serif;
  margin-right: 1rem;
`;

export const CategoryItem = styled((props: GatsbyLinkProps) => (
  <Link {...props} />
))`
  ${RoundItem}
  ${SCALE_TRANSITION}
`;
