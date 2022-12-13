import { ProductContent, ProductInfo } from './styles';

interface IProductData {
    id: string;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface IProductProps {
    product: IProductData;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Product = ({ product, onClick }: IProductProps) => {
    return (
        <ProductContent>
            <div className='img-box'>
                <img draggable='false' src={product.img} alt={product.name} />
            </div>
            <ProductInfo>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <button id={product.id} onClick={onClick} className='btn mediumGreen'>Adicionar</button>
            </ProductInfo>
        </ProductContent>
    );
};
