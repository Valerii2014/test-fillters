import './productItem.scss'

import { useState, useRef, useEffect } from 'react'

import IconList from '../iconsList/IconsList'

import checkLength from '../../utils/checkLength'

const ProductItem = ({ productData, changeProduct, productIconsData }) => {
    const { status, product, id, name, icon } = productData

    const [productName, setProductName] = useState(name)
    const [isIconListActive, setIsIconListActive] = useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
        setProductName(name)
    }, [name])

    const handleKeyPress = (event, id) => {
        if (event.key === 'Enter') {
            const value = event.target.value
            if (checkLength(value, 3, 50)) {
                changeProduct(id, value)
            }
            inputRef.current.blur()
        }
    }
    const handleBlur = (e) => {
        if (e.target.classList.contains('overflow')) {
            setIsIconListActive('hide')
            setProductName(name)
        }
    }

    const getIconListClass = (isIconListActive) => {
        if (isIconListActive === null) return ''
        else if (isIconListActive === 'hide') return 'icon-list-wrapper_hide'
        else if (isIconListActive === 'show') return 'icon-list-wrapper_show'
    }

    return (
        <div className="product-item table-row">
            <div
                className="product-item_status table-row_status"
                onClick={() => changeProduct(id)}
            >{`${status ? 'on' : 'off'}`}</div>
            <div className="product-item_product table-row_product">
                {product}
            </div>
            <div className="product-item_id table-row_id">{id}</div>
            <div className="product-item_name table-row_name">
                <img src={`${icon.url}`} alt={`${icon.id}`} />
                <input
                    type="text"
                    ref={inputRef}
                    onChange={(e) => setProductName(e.target.value)}
                    maxLength={50}
                    value={productName}
                    onFocus={() => setIsIconListActive('show')}
                    onKeyDown={(e) => handleKeyPress(e, id)}
                />
                <div
                    className={`icon-list-wrapper ${getIconListClass(
                        isIconListActive
                    )}`}
                >
                    <IconList
                        productsIcons={productIconsData}
                        changeProduct={changeProduct}
                        productIconId={icon.id}
                        productId={id}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductItem
