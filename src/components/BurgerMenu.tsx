import React from 'react';
import {Drawer, Button, Menu} from 'antd';
import Link from "next/link";

const BurgerMenu = ({visible, onClose}) => {
    return (
        <Drawer
            title="Меню"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <Menu theme="white" mode="vertical">
                <Menu.Item key="1">
                    <Link href={'/'}>
                        Главная
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href={'stock'}>
                        Акции
                    </Link>
                </Menu.Item>

            </Menu>
        </Drawer>
    );
};

export default BurgerMenu;
