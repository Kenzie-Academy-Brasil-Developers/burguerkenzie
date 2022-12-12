import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { MainContainer } from "./styles";

export const Home = () => {
    return (
        <>
            <Header />
            <MainContainer className="container">
                <ProductsList />
                <Cart />
            </MainContainer>
        </>
    );
};
