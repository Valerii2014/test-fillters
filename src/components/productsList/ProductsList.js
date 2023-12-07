import './productsList.scss'

import { useState } from 'react'

import ProductItem from '../productItem/ProductItem'
import NewProductItem from '../productItem/NewProductItem'

const ProductsList = ({
    productsData,
    hasNewProductInput,
    productIconsData,
    addProduct,
    toggleNewProductInput,
    changeProduct,
    usedIcons,
    dellProduct,
    choisedProducts,
    toggleChoisedProduct,
    delFromChoised,
}) => {
    const [tableIsActive, setTableIsActive] = useState(false)
    const productIsChoised = (productId) => {
        return choisedProducts.some(
            (choisedProductId) => choisedProductId === productId
        )
    }

    const buildProductsList = (productsData) => {
        return productsData.map((productData) => (
            <div
                key={productData.id}
                className={`product-item-wrapper ${
                    productIsChoised(productData.id)
                        ? 'product-item-wrapper_choised'
                        : ''
                } `}
                onClick={(e) => {
                    if (productData.status) return

                    const classList = e.target.classList
                    if (
                        classList.contains('product-item') ||
                        classList.contains('product-item_id') ||
                        classList.contains('product-item_status') ||
                        classList.contains('product-item_product')
                    ) {
                        toggleChoisedProduct(productData.id)
                    }
                }}
            >
                <ProductItem
                    productData={productData}
                    productIconsData={productIconsData}
                    changeProduct={changeProduct}
                    toggleChoisedProduct={toggleChoisedProduct}
                    usedIcons={usedIcons}
                    dellProduct={dellProduct}
                    delFromChoised={delFromChoised}
                    tableIsActive={tableIsActive}
                />
            </div>
        ))
    }

    return (
        <div
            className="products-list"
            onMouseEnter={() => setTableIsActive(true)}
            onMouseLeave={() => setTableIsActive(false)}
        >
            <div className={`${hasNewProductInput ? '' : 'product-hide'}`}>
                <NewProductItem
                    hasNewProductInput={hasNewProductInput}
                    addProduct={addProduct}
                    changeProduct={changeProduct}
                    toggleNewProductInput={toggleNewProductInput}
                />
            </div>
            {buildProductsList(productsData)}
        </div>
    )
}

export default ProductsList
