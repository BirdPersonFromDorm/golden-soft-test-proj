import React from 'react';
import {AppProps} from "next/app";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import MainLayout from "../layouts/MainLayout";
import '../styles/index.scss'
import {createApi} from "../api";

export const api = createApi();

export default function App({Component, pageProps}: AppProps) {

    const queryClient = React.useRef(new QueryClient())

    return (
        <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Hydrate>
        </QueryClientProvider>
    )
}
