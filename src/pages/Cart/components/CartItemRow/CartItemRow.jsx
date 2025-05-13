import { Trash2Icon } from "lucide-react";

const CartItemRow = ({ item, onDeleteBtnClick, onIncrement, onDecrement }) => {

  const { id, name, price, image, quantity } = item;
  return <tr
    className="text-center border-t border-gray-200">
    <td className="p-2">
      <img className="h-20 m-auto" src={image} alt={name} />
    </td>
    <td className="p-2">{name}</td>
    <td className="p-2">${price}</td>
    <td className="p-2">
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => onDecrement(id)}
          className="px-2 py-1 bg-gray-200 rounded text-sm"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => onIncrement(id)}
          className="px-2 py-1 bg-gray-200 rounded text-sm"
        >
          +
        </button>
      </div>
    </td>
    <td className="p-2 font-bold text-primary-black">${price * quantity}</td>
    <td className="p-2 text-red-500 text-center">
      <button onClick={() => onDeleteBtnClick(id)}><Trash2Icon /></button>
    </td>
  </tr>
}

export default CartItemRow;