import { ChangeTheme } from "@/src/context/ThemeContext";
import Head from "next/head";
import Layout from "../src/layout/Layout";

const profile = () => {
  const { theme } = ChangeTheme();

  return (
    <>
      <Head>
        <title>Tasty Food | Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <div className={`profile ${theme}`}>profile</div>
      </Layout>
    </>
  );
};

export default profile;
