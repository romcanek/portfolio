import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Roman Tarnai</title>
            </Head>
            <Navbar />
        </React.Fragment>
    );
};

export default Home;
