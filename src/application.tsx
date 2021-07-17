import React, { useReducer } from "react";
import {ChakraProvider} from "@chakra-ui/react";

import HomeScreen from "./app/screens/Home"
import Layout from "./app/layout";
import theme from "./theme";


import "./theme.css";
import {FavProductContextProvider, productReducer, inicialProductState} from "./context";

const Application: React.FunctionComponent = () => {

    const [productState, productDispatch] = useReducer(productReducer, inicialProductState)

    const FavProductContextValues = {
        productState,
        productDispatch
    };

    return (
        <FavProductContextProvider value={FavProductContextValues}>
            <ChakraProvider theme={theme}>
                <Layout>
                     <HomeScreen></HomeScreen>
                </Layout>
            </ChakraProvider>
        </FavProductContextProvider>
    );
}

export default Application;