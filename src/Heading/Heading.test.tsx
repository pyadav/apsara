import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Heading from "./Heading";
import { HeadingProps } from "./Heading.types";

describe("Heading Component", () => {
    let props: HeadingProps;

    beforeEach(() => {
        props = {
            theme: "primary",
        };
    });

    const renderComponent = () => render(<Heading {...props} />);

    it("should have primary className with default props", () => {
        const { getByTestId } = renderComponent();
        getByTestId("heading-component");
    });

    it("should have secondary className with theme set as secondary", () => {
        props.theme = "secondary";
        const { getByTestId } = renderComponent();
        getByTestId("heading-component");
    });
});
