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
      const savedDarkMode = localStorage.getItem('darkMode');
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (savedDarkMode === null) {
        document.body.classList.add(isDarkMode ? 'dark' : 'light');
        localStorage.setItem('darkMode', isDarkMode.toString());
        return;
      };
      document.body.classList.add(isDarkMode ? 'light' : 'dark');
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
