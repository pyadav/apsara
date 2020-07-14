import React from "react";

import { HeadingProps } from "./Heading.types";
import { StyledDiv, StyledHeading, StyledDescription } from "./Heading.styles";

const Heading: React.FC<HeadingProps> = ({ theme }: HeadingProps) => (
    <StyledDiv data-testid="heading-component" theme={theme}>
        <StyledHeading>I&aposm the test component</StyledHeading>
        <StyledDescription>Made with love by Harvey</StyledDescription>
    </StyledDiv>
);

export default Heading;
