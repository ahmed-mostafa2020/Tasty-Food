import Head from "next/head";
import HomeLayout from "../src/layout/HomeLayout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { API_URLS } from "../src/util/API_URL";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Items from "../src/components/Items";
import Offers from "../src/components/Offers";
import AboutUs from "../src/components/AboutUs";
import Delivery from "../src/components/Delivery";
import category1 from "../public/assets/images/map-pin.png";
import DownShapedBorder from "@/src/atomicDesign/atoms/DownShapedBorder";
import { ChangeTheme } from "@/src/context/ThemeContext";
import UpShapedBorder from "@/src/atomicDesign/atoms/UpShapedBorder";

const Home = ({ data }) => {
  const { myPalette } = ChangeTheme();

  const { t } = useTranslation();

  const allCategories = data.data.category;

  return (
    <>
      <Head>
        <title>Tasty Food | {t("Home")} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <HomeLayout>
        <main className="home">
          <Items />

          <DownShapedBorder fill={myPalette.background.shaped_border} />

          <Container fixed className="container">
            <Offers />

            <AboutUs />
          </Container>

          <Delivery />

          <Container fixed className="container">
            <Grid
              sx={{ marginTop: 0 }}
              item
              container
              rowSpacing={5}
              columnSpacing={{ sm: 1, md: 2, lg: 3 }}
            >
              {data &&
                allCategories.map((category) => (
                  <Grid
                    className="column"
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    key={category.name}
                  >
                    <Link
                      href={{
                        pathname: `/category/${category.slug}`,
                      }}
                    >
                      <div className="category-box">
                        <Image
                          className="category-img"
                          loader={() => `${category.image}`}
                          src={`${category.image}`}
                          alt="category"
                          width={370}
                          height={220}
                        />

                        <div className="category-info">
                          <h4>{category.name}</h4>
                        </div>
                      </div>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>
      </HomeLayout>
    </>
  );
};
export default Home;

export async function getServerSideProps({ locale }) {
  const res = await fetch(API_URLS.HOME, API_URLS.HEADER_GET);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
