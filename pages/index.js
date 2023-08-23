import { ChangeTheme } from "@/src/context/ThemeContext";
import Head from "next/head";
import HomeLayout from "../src/layout/HomeLayout";

export default function Home() {
  const { theme } = ChangeTheme();
  return (
    <>
      <Head>
        <title>Tasty Food | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <HomeLayout>
        <main className={`home ${theme}`}>
          <h1>okkkkkkkkkkkk</h1>
          <h2>noooooooooooo</h2>
          <h3>yessssssssssss</h3>
        </main>
      </HomeLayout>
    </>
  );
}
