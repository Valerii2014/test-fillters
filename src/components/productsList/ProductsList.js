import './productsList.scss'

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
    choisedProducts,
    toggleChoisedProduct,
}) => {
    const productIsChoised = (productId) => {
        return choisedProducts.some(
            (choisedProductId) => choisedProductId === productId
        )
    }
    console.log(productsData)
    const buildProductsList = (productsData) => {
        return productsData.map((productData) => (
            <div
                key={productData.id}
                className={`product-item-wrapper ${
                    productIsChoised(productData.id)
                        ? 'product-item-wrapper_choised'
                        : ''
                }`}
                onClick={() => toggleChoisedProduct(productData.id)}
            >
                <ProductItem
                    productData={productData}
                    productIconsData={productIconsData}
                    changeProduct={changeProduct}
                    toggleChoisedProduct={toggleChoisedProduct}
                    usedIcons={usedIcons}
                />
            </div>
        ))
    }

    return (
        <div className="products-list">
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
