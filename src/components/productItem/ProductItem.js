import './productItem.scss'

import { useState, useRef, useEffect } from 'react'

import IconList from '../iconsList/IconsList'

import checkLength from '../../utils/checkLength'
import { sliceString } from '../../utils/sliceString'

const ProductItem = ({
    productData,
    changeProduct,
    productIconsData,
    usedIcons,
}) => {
    const { status, product, id, name, icon } = productData

    const [productName, setProductName] = useState(name)
    const [isIconListActive, setIsIconListActive] = useState(false)

    const input1Ref = useRef(null)
    const input2Ref = useRef(null)

    useEffect(() => {
        setProductName(name)
    }, [name])

    const handleKeyPress = (event, id) => {
        if (event.key === 'Enter') {
            const value = event.target.value
            if (checkLength(value, 3, 50)) {
                changeProduct(id, value)
            }
            handleBlur()
            input1Ref.current.blur()
        }
    }
    const handleBlur = (event) => {
        const targ = event.target
        if (targ !== input1Ref.current && targ !== input2Ref.current) {
            setIsIconListActive(false)
            setProductName(name)
            input1Ref.current.blur()
        }
    }

    return (
        <div className={`product-item table-row`}>
            <div className="table-row-prev" />

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
                    ref={input1Ref}
                    onChange={(e) => setProductName(e.target.value)}
                    maxLength={50}
                    value={productName}
                    onMouseLeave={handleBlur}
                    onFocus={() => setIsIconListActive(true)}
                    onKeyDown={(e) => handleKeyPress(e, id)}
                />
                <div
                    className={`icon-list-wrapper ${
                        isIconListActive ? 'icon-list-wrapper_active' : ''
                    }`}
                    onMouseLeave={handleBlur}
                    ref={input2Ref}
                >
                    <div className="filters-list-wrapper_for-handler">
                        <IconList
                            productsIcons={productIconsData}
                            changeProduct={changeProduct}
                            productIconId={icon.id}
                            usedIcons={usedIcons}
                            productId={id}
                        />
                    </div>
                </div>
            </div>
            <div className="table-row_additional"></div>
        </div>
    )
}

export default ProductItem
