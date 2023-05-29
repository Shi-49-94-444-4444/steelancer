import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '@/app/layout';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Steelancer</title>
                    <link rel="icon" href="/images/logo.png" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}

export default MyApp;
