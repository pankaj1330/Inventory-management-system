
function Item({item,incQuantity,decQuantity,deleteItem,editItem}) {
    return (
        <tr>
            <td>{item.item}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>
                <div className="flex flex-row gap-2 items-center">
                    <button className="bg-red-600 px-2 font-bold text-white rounded-md cursor-pointer" onClick={()=>decQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="bg-green-600 px-2 font-bold text-white rounded-md cursor-pointer" onClick={()=>incQuantity(item.id)}>+</button>
                </div>
            </td>
            <td>{item.quantity * item.price}</td>
            <td>
                <div>
                    <button className="bg-red-600 px-2 me-2 text-white rounded-md cursor-pointer my-1" onClick={()=>deleteItem(item.id)}>Delete</button>
                    <button className="bg-green-600 px-2 text-white rounded-md cursor-pointer my-1" onClick={()=>editItem(item.id)}>Edit</button>
                </div>
            </td>
        </tr>
    )
}

export default Item