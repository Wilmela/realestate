import {Box, Flex, Icon} from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext);

    return(
        <Flex justify='center' align='center' marginRight='1'>
            <Icon as={FaArrowAltCircleLeft} 
                onClick={()=>scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justify="center" align="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={()=>scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    style={{ overflow: "hidden" }}
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
  >
    {data.map((photo) => (
      <Box key={photo.id} w='910px' itemId={photo.id} overflow='hidden'>
        <Image 
            alt='property'
            placeholder='blur'
            blurDataURL={photo.url}
            src={photo.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;