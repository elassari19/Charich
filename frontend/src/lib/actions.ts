import { toggleWatchList } from "@/store/watchlist"
import { addToCart, decrementQuantity, incrementQuantity, removeAllFromCart, removeFromCart, selectProductOptions } from "../store/cartSlice";

export const actions = (type: string, product: any) => {
  switch (type) {
    case 'watchlist':
      return toggleWatchList(product.id);
    case 'increment':
      return incrementQuantity({ ...product });
      case 'decrement':
        return decrementQuantity({ ...product });
      case 'add':
      return addToCart({ ...product });
    case 'remove':
      return removeFromCart({ ...product });
    case 'removeAll':
      return removeAllFromCart();
    case 'color':
      return selectProductOptions({ id: product.id, color: product.color });
    case 'size':
      return selectProductOptions({ id: product.id, size: product.size });

    default:
      return removeFromCart({ ...product });
  }
}