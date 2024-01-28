import { css } from '@emotion/react';
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
  align-items: baseline;
`;

const ACTIVE = css`
  border-bottom: 5px solid ${theme.PALETTE.yellow};
  font-weight: 800;
`;
const INACTIVE = css`
  border-bottom: none;
  font-weight: 400;
`;

export const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  ${INACTIVE}
  ${({ active }) => active && ACTIVE}
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  transition: font-weight 0.1s;

  span {
    font-size: 12px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
