import { ProductContent, ProductInfo } from './styles';

interface IProductProps {
    product: any;
    onClick: (e: any) => void;
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
