import { useEffect, useState } from "react";
import {Flex, Box, Spinner, Input, Text, Icon, Select,Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from "next/router";
import {MdCancel} from 'react-icons/md';

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = ()=> {
  const[isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues)=>{
    const path = router.pathname;
    const {query} = router;

    const value = getFilterValues(filterValues);

    value.forEach((item)=> {
      if(item.value && filterValues?.[item.name]){
       query[item.name] = item.value;
      }
    })
    router.push({pathname : path, query})
  }

    const [filters] = useState(filterData);

    return (
      <Flex bg="gray.100" flexWrap="wrap" justify="center" align="center">

        {filters.map((filter) =>(
          <Box key={filter.queryName} >
          <Select
            w='fit-content'
            placeholder={filter.placeholder}
            p='2'
            onChange={(e)=>searchProperties({[filter.queryName]: e.target.value})}
          >
          {filter?.items?.map((item)=>(
            <option value={item.value} key={item.value}>{item.name}</option>
          ))}
          </Select>
          
          </Box>
        ))}
 </Flex>
    );
}

export default SearchFilters;