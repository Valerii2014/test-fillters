import './productsList.scss'

import ProductItem from '../productItem/ProductItem'
import NewProductItem from '../productItem/NewProductItem'
import { useState } from 'react'

const ProductsList = ({
    productsData,
    hasNewProductInput,
    productIconsData,
    addProduct,
    toggleNewProductInput,
    changeProduct,
}) => {
    const [newProduct, setNewProduct] = useState(null)

    const buildProductsList = (productsData) => {
        return productsData.map((productData) => (
            <ProductItem
                key={productData.id}
                productData={productData}
                productIconsData={productIconsData}
                changeProduct={changeProduct}
            />
        ))
    }

    return (
        <div className="products-list">
            <NewProductItem
                isVisible={hasNewProductInput}
                addProduct={addProduct}
                changeProduct={changeProduct}
                toggleNewProductInput={toggleNewProductInput}
            />
            {buildProductsList(productsData)}
        </div>
    )
}

export default ProductsList
