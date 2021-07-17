import React from "react";
import {Box, Container, Stack, Image} from "@chakra-ui/react";

import logo from "../../assets/wallapop.png"

const Navbar: React.FC = () => {
    return <Box backgroundColor="white" boxShadow="md">
        <Container maxWidth="6xl">
            <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between" paddingY={3}>
                <Image height={20} width={20} src={logo}/>
            </Stack>
        </Container>
    </Box>
}

export default Navbar;