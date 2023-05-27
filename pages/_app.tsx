import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Steelancer</title>
                    <link rel="icon" href="/images/logo.png"/>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
