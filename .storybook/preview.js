import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

// Apply global styles for storybook
import "!style-loader!css-loader!less-loader!../src/styles/storybook.less";
import "../src/styles/core.less";

addDecorator((story) => <div style={{ margin: "16px" }}>{story()}</div>);
addParameters({
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
    },
    options: {
        showRoots: true,
    },
});
