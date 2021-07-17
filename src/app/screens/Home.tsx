import React from "react";
import {CircularProgress, Button, Input, Flex, Stack} from "@chakra-ui/react";

import fetchAllProducts from "../../product/api";
import {Product} from "../../product/types"
import ProductList from "../../product/components/ProductList";

const HomeScreen: React.FC = () => {
    const [product, setProduct] = React.useState<Product[]>([]);
    const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");
    const [currentPage, setCurrentPage] = React.useState(0);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        fetchAllProducts().then((products) => {
            setProduct(products);
            setStatus("resolved");
        });
    }, []);

    const filteredProducts = (): Product[] => {
        if( search.length === 0 ){
            return product.slice(currentPage, currentPage+5);
        }
        const filtered = product.filter( prod => prod.title.toLowerCase().includes(search.toLowerCase()));
        return filtered.slice( currentPage, currentPage +5);
    }

    const nextPage = () => {
        if(product.filter( prod => prod.title.toLowerCase().includes(search.toLowerCase())).length > currentPage +5 ){
            setCurrentPage(currentPage + 5)
        }
    }

    const prevPage = () => {
        if(currentPage > 0 ){
            setCurrentPage(currentPage - 5)
        }
    }

    const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(0);
        setSearch(event.target.value);
    }

    if( status === "pending") {
        return (
            <Flex alignItems="center" justifyContent="center" padingY={12}>
                <CircularProgress isIndeterminate color="primary.500"></CircularProgress>
            </Flex>
            
        );
    };

    return (
        <Stack>
            <Stack alignItems="center" direction="row" spacing={3} width="100%">
                <Input variant="outline" placeholder="Buscar categoría" size="lg" value={search} onChange={searchChange}/>
            </Stack>
            <Stack flex={1} spacing={1}>
                <ProductList products={filteredProducts()} />
            </Stack>
            <Stack alignItems="center" marginTop={48} direction="row" display="block" spacing={6} borderRadius="sm" opacity={0.9} >
                <Button backgroundColor="primary.400"
                    borderRadius={9999}
                    color= "white"
                    cursor="pointer"
                    fontWeight="500"
                    paddingY={6}
                    paddingX={6}
                    width={250}
                    onClick={prevPage}
                    data-testid="prevPage"> Anterior </Button>
                <Button backgroundColor="primary.400"
                    borderRadius={9999}
                    color= "white"
                    cursor="pointer"
                    fontWeight="500"
                    paddingY={6}
                    paddingX={6}
                    width={250}
                    onClick={nextPage}
                    data-testid="nextPage"> Siguiente </Button>
            </Stack>
        </Stack>
    );
};

export default HomeScreen;