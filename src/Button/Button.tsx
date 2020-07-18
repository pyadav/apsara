import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd/lib/button";
import clsx from "clsx";

import "./Button.styles.less";
export interface ButtonProps extends AntButtonProps {
    /** option to show/hide border configuration */
    border?: boolean;
}

const Button: React.FC<ButtonProps> = ({ border, className, ...props }: ButtonProps) => {
    return (
        <AntButton data-testid="button-component" {...props} className={clsx(className, { "no-border": !border })} />
    );
};

Button.defaultProps = {
    border: true,
};

export default Button;
