import React, {FC, PropsWithChildren, useState} from 'react';
import Head from "next/head";
import {Image} from "next/dist/client/image-component";
import MobHeaderArrowToLeftBlockIcon from "../icons/MobHeaderArrowToLeftBlockIcon";
import MobHeaderBurgerIcon from "../icons/MobHeaderBurgerIcon";
import Link from "next/link";
import AppBurgerMenu from '../components/BurgerMenu'

const Meta: FC<PropsWithChildren<IMeta>> = ({title, pageTitle, children}) => {

    const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuVisible(!burgerMenuVisible);
    };

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="page-wrap">
                <div className="page-title">
                    {pageTitle}
                </div>
                <div className="page-title-wrap">
                    <div className="page-title-wrap-back-button">
                        <MobHeaderArrowToLeftBlockIcon/>
                    </div>
                    <Link href={'/'}>
                        <Image src="/logo.png" alt="" width={234} height={19}/>
                    </Link>
                    <div className="page-title-wrap-burger" onClick={toggleBurgerMenu}>
                        <MobHeaderBurgerIcon/>
                        <AppBurgerMenu visible={burgerMenuVisible} onClose={toggleBurgerMenu} />
                    </div>
                </div>
                {children}
            </main>
        </>
    );
};

export default Meta;