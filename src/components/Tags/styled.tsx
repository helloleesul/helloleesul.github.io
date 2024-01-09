import styled from '@emotion/styled';
import { Link } from 'gatsby';
import theme from '~/styles/theme';

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
  gap: 20px;
  margin: 2rem auto 0;
`;

export const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  border-bottom: ${({ active }) =>
    active ? `5px solid ${theme.PALETTE.yellow}` : 'none'};
  cursor: pointer;
  display: flex;
  align-items: flex-start;

  span {
    font-size: 12px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
