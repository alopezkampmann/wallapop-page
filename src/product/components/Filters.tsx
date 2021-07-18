import React, { useContext } from "react";
import {Text, Stack, Box, Button, Grid as ChakraGrid, Modal, ModalContent, useDisclosure, ModalFooter, ModalCloseButton, ModalOverlay, ModalHeader, Flex} from "@chakra-ui/react";
import {Filter} from "./types";
import FavProductContext from "../../context";
import FavCard from "./FavCard";
import { Product } from "../types";

interface Props {
    active: Filter;
    onChange: (filter: Filter) => void;
}

const FILTERS: Filter[] = [Filter.Title, Filter.Description, Filter.Email, Filter.HighestPrice, Filter.LowestPrice]

const Filters: React.FC<Props> = ({onChange, active}) => {
    const [selected, setSelected] = React.useState<Product["title"] | null>(null);
    const favProductContext = useContext(FavProductContext); 
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Stack direction="row" spacing={6}>
            <Text color="gray.500">Ordenado por:</Text>
            <Stack direction="row" spacing={4}>
                {FILTERS.map(filter => (
                    <Box key={filter} 
                        backgroundColor={filter === active? "primary.400" : "gray.100"}
                        borderRadius={9999}
                        color={filter === active? "white" : "gray.600"}
                        cursor="pointer"
                        fontWeight="500"
                        paddingY={2}
                        paddingX={6}
                        onClick={() => onChange(filter)}
                    >
                        {filter}
                    </Box>
                ))}
            </Stack>
            <Stack  direction="row"  spacing={6} borderRadius="sm" opacity={0.9} >
                <Button backgroundColor="yellow.400"
                    borderRadius={9999}
                    color= "white"
                    cursor="pointer"
                    fontWeight="500"
                    paddingY={2}
                    paddingX={6}
                    onClick={onOpen}
                    data-testid="Fav"
                    > Favoritos </Button>
            </Stack>
            <Flex >
                <Modal
                    onClose={onClose}
                    isOpen={isOpen}
                    size="sm"
                    scrollBehavior="outside"
                >
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader>Articulos Favoritos</ModalHeader>
                        <ModalCloseButton />
                            <ChakraGrid gap={6} >
                                {Object.keys(favProductContext.productState.products).length > 0 ?
                                    <Stack>
                                        {Object.keys(favProductContext.productState.products).map((value, index) => {
                                            let _products = favProductContext.productState.products[value];
                                            const p = _products[0].title ? _products[0].title : ''
                                            if (_products.length > 0 ) {
                                                return (
                                                    <FavCard
                                                        key={index}
                                                        onClick={() => setSelected(p)} 
                                                        isSelected={selected === p} 
                                                        product={_products[0]} 
                                                    />
                                                )
                                            }

                                            return {};
                                        })}
                                    </Stack>
                                :
                                    <Text padding={6}> No tiene productos favoritos. </Text>    
                                }
                            </ChakraGrid>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Stack>
    );
};

export default Filters;
