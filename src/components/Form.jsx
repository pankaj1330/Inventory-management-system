
function Form({closeModel,formError,addedSuccess,formItemData,submitForm,handleChange}) {
    return (
        <div className="model fixed top-0 start-0 w-full h-full bg-gray-600 flex items-center justify-center" style={{ backgroundColor: "rgba(26, 26, 26, 0.1)" }}>
            <form className="flex flex-col gap-3 mx-auto bg-white w-full md:w-[500px] p-4 rounded-lg" onSubmit={submitForm}>
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-center font-semibold text-xl">Item details</h2>
                    <button onClick={closeModel} className="cursor-pointer p-1 rounded-lg border bg-black text-white px-2">Close</button>
                </div>
                {formError && <p className="text-center text-red-600 py-1">Fill all fields correctly</p>}
                {addedSuccess && <p className="text-center text-green-600 py-1">Item added to inventory</p>}
                <input type="text" name="item" id="item" className="border p-1 rounded-sm border-gray-400" placeholder="Item Name" value={formItemData.item} onChange={handleChange} />
                <input type="number" name="price" id="price" className="border p-1 rounded-sm border-gray-400" placeholder="price" value={formItemData.price ? formItemData.price : ""} onChange={handleChange} />
                <input type="number" name="quantity" id="quantity" className="border p-1 rounded-sm border-gray-400" placeholder="quantity" value={formItemData.quantity ? formItemData.quantity : ""} onChange={handleChange} />
                <textarea name="desc" id="desc" rows={4} className="border p-1 rounded-sm border-gray-400" placeholder="Item description" value={formItemData.desc} onChange={handleChange}></textarea>
                <input type="submit" value="Add item" className="bg-green-600 p-2 rounded-md text-white font-semibold cursor-pointer" />
            </form>
        </div>
    )
}

export default Form