import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { RoundItem } from '~/styles/common';
import theme from '~/styles/theme';

export const Detail = styled.div`
  transition: opacity 0.2s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  color: ${theme.PALETTE.white};
`;

export const PostItemContent = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
`;

export const PostItemWrapper = styled(Link)`
  &:hover {
    ${Detail} {
      opacity: 1;
      backdrop-filter: blur(3px);
    }
    ${PostItemContent} {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const ThumbnailImage = styled(GatsbyImage)`
  height: 200px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const Date = styled.span`
  ${RoundItem}
  display: inline-block;
  margin-bottom: 0.5rem;
  font-family: system-ui, sans-serif;
`;

export const Category = styled.ul`
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CategoryItem = styled.li`
  ${RoundItem}
`;

export const Summary = styled.p`
  position: absolute;
  bottom: 0;
  padding: 1rem;
  font-weight: 300;
`;
