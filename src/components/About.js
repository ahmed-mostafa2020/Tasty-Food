import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";

const About = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.about;
  const elmenus = homeEndPointData.data.brand.elmenus_url;

  return (
    <>
      <figure>
        <Image
          src={data.image}
          loader={() => `${data.image}`}
          alt="about"
          width={300}
          height={300}
        />
        <BaseImage width={450} height={350} />
      </figure>

      <div className="text">
        <div>
          <SectionTitle title={data.title} fontSize={"35px"} />

          <article>{data.content}</article>
        </div>

        <AtomicButton
          content={"Order Online"}
          href={`${elmenus}`}
          bgColor={myPalette.background.secColor}
          textColor={myPalette.text.dark}
          shadowColor={myPalette.shadowColor.yellow}
        />
      </div>
    </>
  );
};

export default About;
