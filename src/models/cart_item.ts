interface CartItem {
  uuid: string;
  id: string;
  sku: string;
  name: string;
  mainImageUrl: string;
  price: number;
  currency: string;
  qty: number;
  size: string;
  brandName: string;
}

export default CartItem;
