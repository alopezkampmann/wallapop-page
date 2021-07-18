import React, { useContext } from "react";
import {Box, BoxProps, Button, Center, Divider, Flex, Image, Stack, Text} from "@chakra-ui/react";
import { Product } from "../types";
import FavProductContext from "../../context";


interface Props extends BoxProps {
    product: Product;
    isSelected: boolean;
}

const FavCard: React.FC<Props> = ({product, isSelected, ...props}) => {

    const favProductContext = useContext(FavProductContext); 

    return(
        <Box {...props} backgroundColor="white" borderRadius="sm" boxShadow="sm" cursor="pointer" padding={6} position="relative" data-testid="favCard"> 
            <Stack spacing={6} alignItems="center">
                <Center>
                    <Image objectFit="cover" src={product.image} width={64} height={64} />
                </Center>
                <Divider />
                <Stack spacing={1}>
                    <Text fontWeight="500" fontSize="sm">{product.title}</Text>
                </Stack>
                {isSelected && (
                    <Flex 
                        alignItems="center" borderRadius="sm" 
                        height="75%" 
                        justifyContent="center" 
                        left={0}
                        position="absolute"
                        top={0}
                        width="100%"
                        zIndex={2}
                        data-testid="favCardSelected"
                    >
                        <Box backgroundColor="red.500" borderRadius="sm" height="100%" left={0} opacity={0.9} position="absolute" top={0} width="100%" />
                        <Stack>
                            <Button 
                                color="red.500"
                                onClick={ () => favProductContext.productDispatch({type: 'remove_product', payload: product })}
                                data-testid="removeFav"
                            >
                                Quitar de favoritos
                            </Button>
                        </Stack>
                    </Flex>
                )}
            </Stack> 
        </Box>
    );
};

export default FavCard;
