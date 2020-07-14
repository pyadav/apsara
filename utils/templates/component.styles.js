module.exports = (componentName) => ({
    content: `// Generated with util/create-component.js
    import styled from "styled-components";
    export const Styled${componentName} = styled.h2``;
  `,
    extension: `.ts`,
});
