import { Trash2Icon } from "lucide-react";

const CartItemRow = ({ item, onDeleteBtnClick }) => {

  const { id, name, price, image, quantity } = item;
  return <tr
    className="text-center border-t border-gray-200">
    <td className="p-2">
      <img className="h-20 m-auto" src={image} alt={name} />
    </td>
    <td className="p-2">{name}</td>
    <td className="p-2">${price}</td>
    <td className="p-2">{quantity}</td>
    <td className="p-2 font-bold text-primary-black">${price * quantity}</td>
    <td className="p-2 text-red-500 text-center">
      <button onClick={() => onDeleteBtnClick(id)}><Trash2Icon /></button>
    </td>
  </tr>
}

export default CartItemRow;