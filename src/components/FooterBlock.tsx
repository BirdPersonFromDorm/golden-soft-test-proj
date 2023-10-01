import React from 'react';
import {Layout} from "antd";
import Link from "next/link";
import FooterVKIcon from "../icons/FooterVKIcon";
import {Image} from "next/dist/client/image-component";

const {Footer} = Layout;

const FooterBlock = () => {

    const navOne = [
        {
            id: 1,
            path: 'stock',
            title: 'Акции'
        },
        {
            id: 2,
            path: 'about-us',
            title: 'О нас'
        },
        {
            id: 3,
            path: 'delivery',
            title: 'Доставка'
        },
    ]

    const navTwo = [
        {
            id: 1,
            path: 'contacts',
            title: 'Контакты'
        },
        {
            id: 2,
            path: 'info',
            title: 'Правовая информация'
        },
    ]

    return (
        <Footer
            style={{
                background: 'white',
                color: 'black',
                height: '100%',
                padding: 0,
                lineHeight: '24px',
            }}
        >
            <div className="footer-wrapper">

                <div className="footer-wrapper-top">

                    <div className="footer-wrapper-top-nav">
                        <h3>
                            Навигация
                        </h3>
                        <div className="footer-wrapper-top-nav-items">
                            <div className="footer-wrapper-top-nav-items-left">
                                {
                                    navOne.map((item: any) =>
                                    <Link href={item.path} >
                                        {item.title}
                                    </Link>
                                    )
                                }
                            </div>
                            <div className="footer-wrapper-top-nav-items-right">
                                {
                                    navTwo.map((item: any) =>
                                        <Link href={item.path}>
                                            {item.title}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="footer-wrapper-top-contacts">
                        <div className="footer-wrapper-top-contacts-item">
                            <h3>
                                Заказывайте по телефону
                            </h3>
                            <p>
                                +7 (999) 999-99-99
                            </p>
                        </div>
                        <div className="footer-wrapper-top-contacts-item">
                            <h3>
                                Доставка работает
                            </h3>
                            <p>
                                с 10:30 до 23:30
                            </p>
                        </div>
                        <FooterVKIcon/>
                    </div>

                    <div className="footer-wrapper-top-apps">
                        <Image src="/logo.png" alt="" width={311} height={25}/>
                        <p>
                            Любимые блюда в приложении! <br></br>
                            Скачай сейчас!
                        </p>
                        <div className="footer-wrapper-top-apps-icons">
                            <Image src="/googlePlay.png" alt="" width={140} height={40}/>
                            <Image src="/appStore.png" alt="" width={140} height={40}/>
                        </div>
                    </div>

                    <div className="footer-wrapper-top-line-top"/>
                    <div className="footer-wrapper-top-line-bottom"/>
                </div>

                <div className="footer-wrapper-bottom">
                    2023 © «Джонни Тунец» - Новая волна вкуса
                </div>
            </div>

        </Footer>
    );
};

export default FooterBlock;