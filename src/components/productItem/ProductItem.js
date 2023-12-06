import './productItem.scss'

const ProductItem = ({ productData, toggleStatus }) => {
    const { status, product, id, name, icon } = productData

    return (
        <div className="product-item table-row">
            <div
                className="product-item_status table-row_status"
                onClick={() => toggleStatus(id)}
            >{`${status ? 'on' : 'off'}`}</div>
            <div className="product-item_product table-row_product">
                {product}
            </div>
            <div className="product-item_id table-row_id">{id}</div>
            <div className="product-item_name table-row_name">
                <img src={`${icon.url}`} alt={`${icon.id}`} /> {name}
            </div>
        </div>
    )
}

export default ProductItem
