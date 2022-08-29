import Link from 'next/link';
import {Menu, MenuButton, MenuList, MenuItem,IconButton, Flex, Spacer, Box} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';


const Links = ({title, address, icon})=>(
    <Link href={address} passHref>
        <MenuItem key={title} icon={icon}>{title}</MenuItem>
    </Link>
)

const Navbar = ()=>(
    <Flex p='2' borderBottom='1px' borderColor='gray.100' alignItems='center'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' paddingLeft='2'>RealEstate</Link>
        </Box>
        <Spacer/>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu/>} variant='outline' color='red.400'/>
            <MenuList>
            {[
                {title:'Home', address: '/', icon: <FcHome/>},
                {title:'Search', address: '/search', icon: <BsSearch/>},
                {title:'Buy Property', address: '/search?purpose=for-sale', icon: <FcAbout/>},
                {title:'Rent Property', address: '/search?purpose=for-rent', icon: <FiKey/>},
            ].map((item, i)=>(<Links key={`${item.title} + ${i}`} title={item.title} address={item.address} icon={item.icon} />))}
            </MenuList>
        </Menu>

    </Flex>
)

export default Navbar;