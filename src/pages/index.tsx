import { getAllData } from "../api/rolls";
import { GetServerSideProps } from "next";
import Meta from "../seo/Meta";
import React from "react";
import Link from "next/link";

export default function Home() {

    return (
        <Meta title={'Главная'}>
            <Link href={'/stock'}>Home</Link>
        </Meta>
    );
}
