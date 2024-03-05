import React, { forwardRef } from 'react';
import { HeaderWrapper, Title, ThemeSwitch } from './styled';
import { Link } from 'gatsby';
import { useThemeContext } from '~/context/ThemeContextProvider';

type HeaderProps = {
  title: string;
};

export default forwardRef<HTMLHeadingElement, HeaderProps>(function Header(
  { title },
  ref,
) {
  const { onChangeTheme } = useThemeContext();

  return (
    <HeaderWrapper ref={ref}>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <ThemeSwitch onClick={onChangeTheme}>
        <div id="mode-bg"></div>
        <div id="mode-item">
          <span className="light">light</span>
          <span className="dark">dark</span>
        </div>
      </ThemeSwitch>
    </HeaderWrapper>
  );
});
