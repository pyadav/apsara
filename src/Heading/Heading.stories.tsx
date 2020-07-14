import React from "react";
import Heading from "./Heading";

export default {
    title: "Heading",
};

export const Primary = (): React.ReactNode => <Heading theme="primary" />;
export const Secondary = (): React.ReactNode => <Heading theme="secondary" />;
