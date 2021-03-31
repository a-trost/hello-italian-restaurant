import { Client } from "../prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = (props) => (
  <>
    <Header />
    <SliceZone {...props} resolver={resolver} />
    <Footer />
  </>
);

// Fetch content from Prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: "homepage",
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: true, // process.env.NODE_ENV === 'development',
  formatPath: () => ({ params: { uid: "homepage" } }),
});

export default Page;
