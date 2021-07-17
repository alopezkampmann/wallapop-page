import React from "react";
import {BoxProps, Stack} from "@chakra-ui/react";

import {Product} from "../types";
import Grid from "./Grid";

interface Props extends BoxProps {
    products: Product[];
};

const ProductList: React.FC<Props> = ({products}) => {

    return (
        <Stack alignItems="center" spacing={6}>
            <Grid  products={ products} />
        </Stack>
    )
}

export default ProductList;