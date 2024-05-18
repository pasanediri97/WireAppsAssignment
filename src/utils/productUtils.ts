import CartItem from '../models/cart_item';
import {Shoe} from '../models/products_response';
import uuid from 'react-native-uuid';

export const convertShoeToCartItem = (
  shoe: Shoe,
  selectedSize: string,
): CartItem => {
  return {
    uuid: uuid.v4() as string,
    id: shoe.id,
    sku: shoe.SKU,
    name: shoe.name,
    mainImageUrl: shoe.mainImage,
    price: parseFloat(shoe.price.amount),
    currency: shoe.price.currency,
    size: selectedSize,
    qty: 1,
    brandName: shoe.brandName,
  };
};

export const getShoeById = (shoes: Shoe[], id: string): Shoe | undefined => {
  return shoes.find(shoe => shoe.id === id);
};

export const calculateTotalPrice = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
};
