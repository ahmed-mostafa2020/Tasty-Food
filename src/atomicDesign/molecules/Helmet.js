import Head from "next/head";
// import { FetchingAllEndPointsData } from "../../context/FetchingDataContext";

const Helmet = ({ brand, pageName }) => {
  // const { homeEndPointData } = FetchingAllEndPointsData();
  // const data = homeEndPointData && homeEndPointData.data.brand;

  return (
    <Head>
      <title>
        {brand.name} | {pageName}
      </title>
      <meta
        name="description"
        content="online shopping with our e-commerce app"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <link rel="icon" href="/favicon.svg" />
      {/* <link rel="icon" href={data.logo} /> */}
    </Head>
  );
};

export default Helmet;
