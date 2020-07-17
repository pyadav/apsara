module.exports = (componentName) => ({
    content: `// Generated with util/create-component.js
          import React from "react";
          import { ${componentName}Props } from "./${componentName}.types";
          import { Styled${componentName} } from  "./${componentName}.styles";
          const ${componentName}: React.FC<${componentName}Props> = ({ foo }: ${componentName}Props) => (
              <Styled${componentName} data-testid="${componentName}" className="foo-bar">{foo}</div>
          );
          export default ${componentName};
      `,
    extension: `.tsx`,
});
