import './productItem.scss'

const ProductItem = (props) => {
    // const { status, product, id, name } = product
    const { name } = props
    return (
        <div className="product-item table-row">
            <div className="product-item_status table-row_status"></div>
            <div className="product-item_product table-row_product"></div>
            <div className="product-item_id table-row_id"></div>
            <div className="product-item_name table-row_name">{name}</div>
        </div>
    )
}

export default ProductItem
