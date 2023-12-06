import './productsList.scss'

import ProductItem from '../productItem/ProductItem'
import NewProductItem from '../productItem/NewProductItem'
import { useState } from 'react'

const ProductsList = ({
    productsData,
    hasNewProductInput,
    addProduct,
    toggleNewProductInput,
    toggleStatus,
}) => {
    const [newProduct, setNewProduct] = useState(null)

    const createNewProduct = () => {}

    const buildProductsList = (productsData) => {
        return productsData.map((productData) => (
            <ProductItem
                key={productData.id}
                productData={productData}
                toggleStatus={toggleStatus}
            />
        ))
    }

    return (
        <div className="products-list">
            <NewProductItem
                isVisible={hasNewProductInput}
                addProduct={addProduct}
                toggleNewProductInput={toggleNewProductInput}
            />
            {buildProductsList(productsData)}
        </div>
    )
}

export default ProductsList
