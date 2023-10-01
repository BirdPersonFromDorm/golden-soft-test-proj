import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import AppBurgerMenu from '../components/BurgerMenu';
import HeaderBlock from "../components/HeaderBlock";
import FooterBlock from "../components/FooterBlock";

const { Content } = Layout;

const MainLayout = ({children}) => {

    const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuVisible(!burgerMenuVisible);
    };

    return (
        <div className="main-wrapper">
            <Layout style={{backgroundColor: '#fff', minHeight: '100vh'}}>
                <HeaderBlock/>
                <Content>
                    {/*<Button onClick={toggleBurgerMenu}>Меню</Button>*/}
                    <AppBurgerMenu visible={burgerMenuVisible} onClose={toggleBurgerMenu} />
                    {children}
                </Content>
                <FooterBlock/>
            </Layout>

        </div>
    );
};

export default MainLayout;