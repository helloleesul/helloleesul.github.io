import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ImageWrapper } from './styled';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

export default function ProfileImage({ profileImage }: ProfileImageProps) {
  return <ImageWrapper image={profileImage} alt="Profile Image" />;
}
