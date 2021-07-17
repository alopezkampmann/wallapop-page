import React, { useContext } from "react";
import {Box, BoxProps, Button, Center, Divider, Flex, Image, Stack, Text} from "@chakra-ui/react";
import { Product } from "../types";
import FavProductContext from "../../context";


interface Props extends BoxProps {
    product: Product;
    isSelected: boolean;
}

const ProductCard: React.FC<Props> = ({product, isSelected, ...props}) => {

    const favProductContext = useContext(FavProductContext); 

    return(
        <Box {...props} backgroundColor="white" borderRadius="sm" boxShadow="md" cursor="pointer" padding={6} position="relative"> 
            <Stack spacing={6}>
                <Stack
                    alignItems="center"
                    backgroundColor="white"
                    borderRadius={9999}
                    borderColor="primary.500"
                    borderWidth={1}
                    color="primary.500"
                    direction="row"
                    fontSize="sm"
                    fontWeight="500"
                    justifyContent="center"
                    padingX={3}
                    paddingY={2}
                    position="absolute"
                    right={6}
                    spacing={2}
                    top={6}
                >
                    <Text>$ {product.price}</Text>
                </Stack>
                <Center>
                    <Image objectFit="cover" src={product.image} width={64} height={64} />
                </Center>
                <Divider />
                <Stack spacing={1}>
                    <Text fontWeight="500">{product.title}</Text>
                    <p style={{    display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5, overflow: 'hidden'}} >{product.description}</p>
                </Stack>
                {isSelected && (
                    <Flex 
                        alignItems="center" 
                        borderRadius="sm" 
                        height="62%" 
                        justifyContent="center" 
                        left={0}
                        position="absolute"
                        top={0}
                        width="100%"
                        zIndex={2}
                    >
                        <Box backgroundColor="primary.500" borderRadius="sm" height="100%" left={0} opacity={0.9} position="absolute" top={0} width="100%" />
                        <Stack>
                            <Button 
                                color="green.500" 
                                data-testid="addFav"
                                onClick={() => favProductContext.productDispatch({type: 'add_product', payload: product })}
                            >
                                Añadir a favoritos
                            </Button>
                        </Stack>
                    </Flex>
                )}
            </Stack> 
        </Box>
    );
};

export default ProductCard;
