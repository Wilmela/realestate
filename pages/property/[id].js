import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    purpose,
    amenities,
    rooms,
    baths,
    rentFrequency,
    photos,
    description,
    furnishingStatus,
    title,
    area,
    agency,
    type,
    isVerified,
  },
}) => (
  <Box>
    <Box w="1000px" m="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
    </Box>

    <Box w="full">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGrid />
      </Flex>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight={2} color="gray.600">
        {description}
      </Text>
    </Box>
    <Flex flexWrap="wrap" textTransform="uppercase" justify="space-around">
      <Flex
        justify="space-around"
        w="400px"
        borderBottom="1"
        borderColor="gray.100"
        p="3"
      >
        <Text>Type</Text>
        <Text fontWeight="bold">{type}</Text>
      </Flex>
      <Flex
        justify="space-around"
        w="400px"
        borderBottom="1"
        borderColor="gray.100"
        p="3"
      >
        <Text>Purpose</Text>
        <Text fontWeight="bold">{purpose}</Text>
      </Flex>
    </Flex>
    {furnishingStatus && (
      <Flex
        justify="space-around"
        w="400px"
        borderBottom="1"
        borderColor="gray.100"
        p="3"
      >
        <Text>Furnishing Status</Text>
        <Text fontWeight="bold">{furnishingStatus}</Text>
      </Flex>
    )}
    <Box>
      {amenities.length && (
        <Text fontSize="2xl" fontWeight="black" mt="5">
          Amenities
        </Text>
      )}
      <Flex flexWrap="wrap" justify="space-evenly">
        {amenities.map((item) =>
          item.amenities.map((amenity) => (
            <Text
              border="1px"
              w="fit-content"
              borderColor="blue.200"
              color="blue.400"
              bg="gray.100"
              borderRadius="5px"
              mx="1"
              my="1"
              p="1"
              key={amenity.text}
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  try {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
  } catch (error) {
    console.log(error.message)
  }
}
