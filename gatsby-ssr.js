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
      const savedTheme = localStorage.getItem('theme');
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      
      if (savedTheme === null) {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        return;
      };
      document.body.classList.add(savedTheme);
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
