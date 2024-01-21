import { Container } from "@mui/material";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import FilterButtons from "../atomicDesign/molecules/FilterButtons";
import Product from "../components/Product";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const FilterGallery = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allCategories = homeEndPointData.data.category;
  console.log(allCategories.filter((category, index) => index === 1));
  console.log(
    Object.assign(
      {},
      allCategories.filter((category, index) => index === 1)
    )
  );

  return (
    <section className="filterGallery">
      <Container>
        <SectionTitle title={"Our Popular Tasty Foods"} fontSize={"35px"} />

        <FilterButtons />

        <div className="productsBox">
          {allCategories.map((category, index) =>
            category.products.map((product, index) => (
              <Product
                key={index}
                loader={product.image}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default FilterGallery;
