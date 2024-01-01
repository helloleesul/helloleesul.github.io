import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import { Link } from 'gatsby';

type GatsbyLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
} & TagItemProps;

type TagItemProps = {
  active: boolean;
};

export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto 0;

  ${TABLET} {
    padding: 0 20px;
  }
`;

export const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;
