import React from 'react';
import StockPage from "../../features/stocks/page/StockPage";
import Meta from "../../seo/Meta";
import {dehydrate, QueryClient} from "react-query";
import {backend} from "../../api";
import {useGetAllData} from "../../features/stocks/hooks/useGetAllData";

export default function Stock() {

    const {
        data,
        isLoading
    } = useGetAllData()

    return (
        <Meta title={'Акции'} pageTitle={'Акции'}>
            <StockPage data={data} isLoading={isLoading}/>
        </Meta>
    );
};


export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['DATA_TEST'], () => backend.rolls.getAllData());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}