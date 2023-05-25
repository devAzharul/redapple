import React from "react";
import Head from "next/head";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Banner from "@/src/components/Banner/Banner";

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title + " | redapple" : "redapple"}</title>
                <meta name="description" content="redapple" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen flex flex-col justify-between">
                <Navbar />
                <Banner />
                <main className="m-auto mt-0 w-full">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
