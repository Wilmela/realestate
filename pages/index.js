import Image from "next/image";
import Link from "next/link";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Property from "../components/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import House1 from '../assets/images/house1.jpg';
import House2 from '../assets/images/house2.jpg';


const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl}) => (
  <Flex w='full' h='full' align='center' justify='center' p={5}>
    <Box>
      <Image src={imageUrl} width={'1225px'} height={600} alt="banner" />
      <Flex direction='column' py="5">
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
        <Text fontSize='3xl' fontWeight='bold'>{title1} <br/> {title2}</Text>
        <Text fontSize='lg' fontWeight='medium' paddingTop={3} paddingBlock={3} color='gray.700' >{desc1} <br/> {desc2}</Text>
        <Button w='200px' py={5} fontSize='xl' bg='blue.400' colorScheme='whiteAlpha' >
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Flex>
    </Box>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {

  return (
    <Box>
      <Banner
        purpose="HOME FOR RENT"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Rent A Home"
        linkName="/search?purpose=for-rent"
        imageUrl={House2}
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="HOME FOR SALE"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Buy A Home"
        linkName="/search?purpose=for-sale"
        imageUrl={House1}
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps(){
  try {
     const propertyForSale = await fetchApi(
       `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
     );
     const propertyForRent = await fetchApi(
       `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
     );

     return {
       props: {
         propertiesForRent: propertyForRent?.hits,
         propertiesForSale: propertyForSale?.hits,
       },
     };
  } catch (error) {
    console.log(error.message)
  }
 
}



