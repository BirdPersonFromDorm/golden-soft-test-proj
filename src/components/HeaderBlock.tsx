import React, {useState} from 'react';
import {Layout} from 'antd';
import {Image} from "next/dist/client/image-component";
import DropDown from "./DropDown";
import LocationIcon from "../icons/LocationIcon";
import ArrowToBottomIcon from "../icons/ArrowToBottomIcon";
import {useRouter} from 'next/router';
import Link from "next/link";
import HeaderSearchIcon from "../icons/HeaderSearchIcon";
import HeaderBucketIcon from "../icons/HeaderBucketIcon";
import HeaderProfileIcon from "../icons/HeaderProfileIcon";
import HeaderLightingIcon from "../icons/HeaderLightingIcon";

const {Header} = Layout;

const HeaderBlock = () => {

    const router = useRouter()

    const citiesList = [
        "Краснодар",
        "Москва",
        "Сочи",
        'Санкт-Петербург'
    ]

    const [city, setCity] = useState('Краснодар')

    const topNav = [
        {
            id: 1,
            path: 'stock',
            title: "Акции",
        },
        {
            id: 2,
            path: 'about-us',
            title: "О нас",
        },
        {
            id: 3,
            path: 'delivery',
            title: "Доставка",
        },
        {
            id: 4,
            path: 'contacts',
            title: "Контакты",
        },
    ]

    const bottomNav = [
        {
            id: 1,
            title: "Комбо наборы",
        },
        {
            id: 2,
            title: "Пицца",
        },
        {
            id: 3,
            title: "Роллы",
        },
        {
            id: 4,
            title: "Суши",
        },
        {
            id: 5,
            title: "Сеты",
        },
        {
            id: 6,
            title: "Вок и закуски",
        },
        {
            id: 7,
            title: "Салаты",
        },
        {
            id: 8,
            title: "Десерты",
        },
        {
            id: 9,
            title: "Напитки",
        },
        {
            id: 10,
            title: "Дополнительно",
        },
    ]

    return (
        <Header
            style={{
                background: 'white',
                color: 'black',
                height: '100%',
                padding: 0,
                lineHeight: '24px',
                position: 'relative',
                marginBottom: 10
            }}
        >
            <div className="header-wrapper-top">
                <div className="header-wrapper-top-left">
                    <Link href={'/'}>
                        <Image src="/logo.png" alt="" width={442} height={35}/>
                    </Link>

                    <div className="header-line"/>
                    <div>
                        <DropDown
                            itemsToChoose={citiesList}
                            selectedItem={city}
                            setSelectedItem={setCity}
                            startIcon={<LocationIcon/>}
                            backIcon={<ArrowToBottomIcon/>}
                        />
                    </div>
                    <div className="header-nav">
                        {
                            topNav.map((item: any) =>
                                <Link
                                    id={item.id}
                                    href={item.path}
                                    className="header-nav-item"
                                    style={{
                                        color: router?.pathname.includes(item.path) ? '#000' : '#999999'
                                    }}
                                >
                                    {item.title}
                                </Link>
                            )
                        }

                    </div>
                </div>
                <div className="header-wrapper-right">
                    <h3>
                        8 (999) 000-99-99
                    </h3>
                    <p>
                        Прием заказов с 9:00 до 23:00
                    </p>
                </div>
            </div>
            <div className="header-wrapper-bottom">
                <div className="header-wrapper-bottom-nav">
                    {
                        bottomNav.map((item: any) =>
                            <div className="header-wrapper-bottom-nav-item">
                                {item.title}
                            </div>
                        )
                    }
                </div>
                <div className="header-wrapper-bottom-search">
                    <HeaderSearchIcon/>
                </div>
                <div className="header-wrapper-bottom-line"/>
                <div className="header-wrapper-bottom-user-block">
                    <div className="header-wrapper-bottom-user-block-bucket">
                        <HeaderBucketIcon/>
                        1089₽
                        <div className="header-wrapper-bottom-user-block-bucket-count">
                            3
                        </div>
                    </div>
                    <div className="header-wrapper-bottom-user-block-profile">
                        <HeaderProfileIcon/>
                        <div className="header-wrapper-bottom-user-block-profile-cost">
                            174
                            <HeaderLightingIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper-line"/>
        </Header>
    );
};

export default HeaderBlock;