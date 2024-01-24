import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import Map from "../src/atomicDesign/atoms/Map";
import ContactForm from "../src/components/ContactForm";
import SectionCrown from "../src/atomicDesign/molecules/SectionCrown";

const ContactUs = ({ data }) => {
  const { t } = useTranslation();
  const contactData = data.data.brand;

  const contactItems = [
    {
      icon: <MailOutlineIcon />,
      title: "Email",
      welcomeMsg: "Our friendly team is here to help.",
      data: contactData.email,
    },
    {
      icon: <LocationOnOutlinedIcon />,
      title: "Cafe",
      welcomeMsg: "Come say hello at our cafe HQ.",
      data: contactData.address,
    },
    {
      icon: <PhoneInTalkOutlinedIcon />,
      title: "Phone",
      welcomeMsg: "Faucibus neque vel risus turpis.",
      data: contactData.mobile,
    },
  ];

  return (
    <>
      <Helmet pageName={"Contact Us"} />

      <Layout>
        <LayoutTopWrapper title={t("Contact Us")} />
        <main className="contactUs" style={{ textAlign: "center" }}>
          <Container fixed className="container">
            <SectionCrown
              title={"We’d love to hear from you"}
              description={
                "Porta enim vitae volutpat donec dictumst eu mi gravida sit."
              }
            />

            <div className="contactItemsBox">
              {contactItems.map((contactItem, index) => (
                <div key={index} className="contactItem">
                  <figure>{contactItem.icon}</figure>

                  <div className="text">
                    <h6>{contactItem.title}</h6>
                    <p>{contactItem.welcomeMsg}</p>
                    <p> {contactItem.data}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contactFormSection">
              <SectionCrown
                title={"Get in touch"}
                description={
                  "We would love to hear from you. Please fill out this form."
                }
              />

              <div className="formSection">
                <ContactForm />

                <div className="map">
                  <Map />
                </div>
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default ContactUs;

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
