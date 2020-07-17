import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/global";

addDecorator((story) => (
    <>
        <GlobalStyle />
        {story()}
    </>
));
