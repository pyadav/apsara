import React from "react";
import { Menu } from "./antd";

export const menuItems = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="#">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="#">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
            3rd menu item（disabled）
        </Menu.Item>
    </Menu>
);
