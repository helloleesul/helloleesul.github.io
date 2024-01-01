/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
const awaitLoadStorageScript = `
  (function() {
    try {
      let mode = localStorage.getItem('blog-current-mode');
      let supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (mode === null) {
        const initialMode = supportDarkMode ? 'dark' : 'light';
        document.body.classList.add(initialMode);
        localStorage.setItem('blog-current-mode', initialMode);
        return;
      };
      document.body.classList.add(mode);
    } catch (e) {}
  })();
`;

const AwaitLoadStorageComponent = function () {
  return (
    <script dangerouslySetInnerHTML={{ __html: awaitLoadStorageScript }} />
  );
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <AwaitLoadStorageComponent key="blog-mode-component" />,
  ]);
};
