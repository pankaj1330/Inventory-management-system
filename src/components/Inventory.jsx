import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
import Form from "./Form";

function Inventory() {

    const [formItemData,setFormItemData] = useState({
        id : uuidv4(),
        item : "",
        price : null,
        quantity : null,
        desc : "",
    });
    const [formError,setFormError] = useState(false);
    const [addedSuccess,setAddedSuccess] = useState(false);

    const [items,setItems] = useState([]);
    const [modelOpen,setModelOpen] = useState(false);
    const [edit,setEdit] = useState(false);
    const [editId,setEditId] = useState(null);
    
    function handleChange(e){
        setFormItemData(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
        
    }

    function submitForm(e){
        e.preventDefault();
        
        if((formItemData.item).trim() === "" || !parseInt(formItemData.price) || !parseInt(formItemData.quantity) || parseInt(formItemData.price)<0 || parseInt(formItemData.quantity)<0 ){
            setFormError(true);
            setAddedSuccess(false);
        }
        else{

            if(edit){
                setItems(prevItems => {
                    return prevItems.map(item => {
                        if(item.id === editId){
                            return {...formItemData,id:editId}
                        }
                        return item;
                    })
                })
                setEdit(false);
                setEditId(null);
            }
            else{
                setItems(prevItems => {
                    return [
                        ...prevItems,
                        formItemData
                    ]
                })
            }

            setFormItemData((prev)=>{
                return {
                    id : uuidv4(),
                    item : "",
                    price : null,
                    quantity : null,
                    desc : ""
                }
            })
            setFormError(false);
            setAddedSuccess(true);

        }
        return;
        
    }

    function incQuantity(id){
        setItems(item => {
            return item.map(singleItem=>{
                if(singleItem.id === id){
                    return {
                        ...singleItem,
                        quantity : parseInt(singleItem.quantity)+1
                    }
                }
                return singleItem
            });
        })
    }
    function decQuantity(id){
        setItems(item => {
            return item.map(singleItem=>{
                if(singleItem.id === id){
                    
                    return {
                        ...singleItem,
                        quantity : ((parseInt(singleItem.quantity) <= 0) ? 0 : (parseInt(singleItem.quantity)-1))
                    }
                }
                return singleItem
            });
        })
    }

    function deleteItem(id){
        setItems(item => {
            return item.filter(singleItem=>{
                return singleItem.id !== id;
            });
        })
    }
    function editItem(id){
        setEdit(true);
        setEditId(id);

        const editItem = items.find(item => item.id === id);
        setFormItemData(editItem);

        openModel();

        return;
    }
    function openModel(){
        setModelOpen(true);
        setAddedSuccess(false);
        setFormError(false);
    }
    function closeModel(){
        setModelOpen(false);
        setAddedSuccess(false);
        setEdit(false);
        setEditId(null);
        setFormError(false);
        setFormItemData((prev)=>{
            return {
                id : uuidv4(),
                item : "",
                price : null,
                quantity : null,
                desc : ""
            }
        })
    }

  return (
    <div>
            <div className="text-center my-2">
                <button className="bg-green-600 px-4 py-1 text-white rounded-md cursor-pointer my-2 mx-auto" onClick={openModel}>Add Item in Inventory</button>            
            </div>
        <div className="lg:container my-4 mx-auto px-2 overflow-x-scroll">
            <table className="w-full overflow-x-scroll">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item,i)=>{
                            return  <Item key={item.id} item={item} incQuantity={incQuantity} decQuantity={decQuantity} deleteItem={deleteItem} editItem={editItem}/>
                        })
                    }
                </tbody>
            </table>
        
        {
            modelOpen &&
                <Form 
                    submitForm={submitForm}
                    closeModel={closeModel}
                    formError={formError}
                    addedSuccess={addedSuccess}
                    formItemData={formItemData}
                    handleChange={handleChange}
                />
        }
        </div>
    </div>
  )
}

export default Inventory