import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { CartContext, IProducts } from '../../contexts/CartContext';
import { ProductContent } from './styles';

interface ICartProductProps {
    data: IProducts;
}

export const CartProduct = ({ data }: ICartProductProps) => {
    const { removeProduct } = useContext(CartContext);

    return (
        <ProductContent>
            <div className='img-box'>
                <img draggable='false' src={data.img} alt={data.name} />
            </div>
            <div className='product-info'>
                <div className='product-desc'>
                    <h4>{data.name}</h4>
                    <span>{data.category}</span>
                </div>
                <button id={data.id.toString()} onClick={removeProduct}>
                    <IconButton aria-label='trash-button'
                        sx={
                            { '&:hover': { backgroundColor: '#7b7b7b1c !important' } }
                        }
                    >
                        <DeleteTwoToneIcon />
                    </IconButton>
                </button>
            </div>
        </ProductContent>
    );
};
