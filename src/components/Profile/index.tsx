import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import ProfileImage from '~/components/Profile/Image';
import {
  ProfileWrapper,
  SubTitle,
  Title,
  LinkGroup,
  Description,
} from './styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

type ProfileProps = {
  profileImage: IGatsbyImageData;
};

export default function Profile({ profileImage }: ProfileProps) {
  return (
    <ProfileWrapper>
      <ProfileImage profileImage={profileImage} />

      <Description>
        <Title>leesul, 이슬</Title>
        <SubTitle>
          web frontend developer
          <br />
          스스로 올바른 선택을 할 수 있는 사람이 될 것
        </SubTitle>
        <LinkGroup>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* 이름, 소개, 소셜링크 따로 받아와서 노출시키기 */}
          <li>
            <a href="https://github.com/helloleesul" target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} size="lg" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="mailto:suerish.e@gmail">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>Email</span>
            </a>
          </li>
        </LinkGroup>
      </Description>
    </ProfileWrapper>
  );
}
