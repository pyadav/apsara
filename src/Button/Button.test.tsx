import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

describe("Button", () => {
    let props: ButtonProps;
    beforeEach(() => {
        props = {
            border: false,
        };
    });
    const renderComponent = () => render(<Button {...props} />);
    it("should have no-border class", () => {
        const { getByTestId } = renderComponent();
        const component = getByTestId("button-component");
        expect(component).toHaveClass("no-border");
    });
});
