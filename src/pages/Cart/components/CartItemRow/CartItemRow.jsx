const CartItemRow = ({ item }) => (
  <tr className="text-center border-t border-gray-200">
    <td className="p-2">
      <img className="h-20 m-auto" src={item.image} alt={item.name} />
    </td>
    <td className="p-2">{item.name}</td>
    <td className="p-2">${item.price}</td>
    <td className="p-2">{item.quantity}</td>
    <td className="p-2 font-bold text-primary-black">${item.price * item.quantity}</td>
  </tr>
);

export default CartItemRow;