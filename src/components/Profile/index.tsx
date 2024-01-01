import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import ProfileImage from '~/components/Profile/Image';
import { Background, Wrapper, SubTitle, Title } from './styled';

type ProfileProps = {
  profileImage: IGatsbyImageData;
};

export default function Profile({ profileImage }: ProfileProps) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyun.</Title>
        </div>
      </Wrapper>
    </Background>
  );
}
