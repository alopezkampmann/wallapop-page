import React from "react";
import {Grid as ChakraGrid, Divider, Stack} from "@chakra-ui/react";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import {Filter} from "./types";
import Filters from "./Filters";

interface Props {
    products: Product[];
}

const Grid: React.FC<Props> = ({products}) => {

    const [selected, setSelected] = React.useState<Product["title"] | null>(null);
    const [filter, setFilter] = React.useState<Filter>(Filter.Title);
    const filterProductsList = React.useMemo(() => {
        switch(filter) {
            case Filter.HighestPrice: {
                return [...products].sort((a,b) => {
                    const precioA = parseFloat(a.price)
                    const precioB = parseFloat(b.price)
                    return precioB - precioA;
                });
            }

            case Filter.LowestPrice:{
                return [...products].sort((a,b) => {
                    const precioA = parseFloat(a.price)
                    const precioB = parseFloat(b.price)
                    return precioA - precioB;
                });
            }

            case Filter.Email: {
                return [...products].sort((a,b) => {
                    const emailA = a.email.toLowerCase();
                    const emailB = b.email.toLowerCase();

                    if (emailA > emailB) {
                        return 1;
                    }
                    if (emailA < emailB) {
                        return -1;
                    }

                    return 0;
                });
            }

            case Filter.Description: {
                    return [...products].sort((a,b) => {
                        const descA = a.description.toLowerCase();
                        const descB = b.description.toLowerCase();
    
                        if (descA > descB) {
                            return 1;
                        }
                        if (descA < descB) {
                            return -1;
                        }
    
                        return 0;
                    });
                }

            case Filter.Title:
            default: {
                return [...products].sort((a,b) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();

                    if (titleA > titleB) {
                        return 1;
                    }
                    if (titleA < titleB) {
                        return -1;
                    }

                    return 0;
                });
            }
        }
    }, [filter, products])

    return(
        <Stack>
            <Stack 
                alignItems="flex-start" 
                direction="row" 
                divider={<Divider borderColor="gray.300" height={12} orientation="vertical" />}
                flex={1} 
                spacing={6} 
                width="100%"
            >
                <Filters active={filter} onChange={setFilter} />
            </Stack>
            <ChakraGrid gap={6} templateColumns="repeat(3, 1fr)" >
                {filterProductsList.map((products) => (
                    <ProductCard 
                        key={products.title}
                        onClick={() => setSelected(products.title)} 
                        isSelected={selected === products.title} 
                        product={products} 
                    />
                ))}
            </ChakraGrid>
        </Stack>
    );
};

export default Grid;
