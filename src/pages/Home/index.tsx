import { Cart } from "../../components/Cart";
import { ProductsList } from "../../components/ProductsList";
import { MainContainer } from "./styles";

export const Home = () => {
    return (
        <MainContainer className="container">
            <ProductsList />
            <Cart />
        </MainContainer>
    );
};
