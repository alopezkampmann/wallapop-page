import React from "react";
import {Center, Container, Flex} from "@chakra-ui/react";
import Navbar from "./Navbar"

interface Props {}

const Layout: React.FC<Props> = ({children}) => {
    return <Flex direction="column">
        <Navbar />
        <Center paddingY={6}>
            <Container maxWidth="6xl">
                {children}
            </Container>
        </Center>
    </Flex>
}

export default Layout;