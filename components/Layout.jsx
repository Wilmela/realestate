import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" margin="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </div>
);

export default Layout;
