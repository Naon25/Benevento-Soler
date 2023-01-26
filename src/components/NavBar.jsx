import CartWidget from "./CartWidget";
import { Container,Flex, Spacer, Box , Heading} from '@chakra-ui/react';

const NavBar = () => {

    return ( 
        <>
            <Container maxW="100rem" bg="blue.100" color="#262626">
                <Flex alignContent="center" gap="2">   
                    <Box p="2" color="white">
                        <Heading size="md">E-commerce</Heading>
                    </Box> 
                    <Spacer />
                    <Box p="2" color="white">
                        <CartWidget />
                    </Box> 
                </Flex>         
            </Container>
        </>
    );
    
};

export default NavBar;