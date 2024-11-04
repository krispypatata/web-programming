const ShoppingCart = ({items}) => {
    return(
        <>
            <h3> 
                {/*  Create a label "Ordered Items" */}
                {items == 0 ? "": "Ordered Items"}
            </h3>
            <div className="box">
                <ul>
                    {/* Map the list of items in <li> */}
                    {
                        items.map((item, index) => 
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ShoppingCart;