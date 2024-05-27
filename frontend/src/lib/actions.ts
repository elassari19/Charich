import { toggleWatchList } from "@/store/watchlist"
import { addToCart, decrementQuantity, incrementQuantity, removeAllFromCart, removeFromCart, selectProductOptions } from "../store/cartSlice";

export const actions = (type: string, product: any) => {
  const { color, size, ...productItems} = product;

  switch (type) {
    case 'watchlist':
      return toggleWatchList(product);
    case 'increment':
      return incrementQuantity(product);
      case 'decrement':
        return decrementQuantity(product);
      case 'add':
      return addToCart(product);
    case 'remove':
      return removeFromCart(product);
    case 'removeAll':
      return removeAllFromCart();
    case 'color':
      return selectProductOptions({ ...productItems, color: product.color });
    case 'size':
      return selectProductOptions({ ...productItems, size: product.size });

    default:
      return removeFromCart({ ...product });
  }
}