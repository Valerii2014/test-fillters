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
    dellProduct,
    delFromChoised,
    tableIsActive,
}) => {
    const { status, product, id, name, icon } = productData
    const [isHelpActive, setIsHelpActive] = useState(false)
    const [productName, setProductName] = useState(sliceString(15, name))
    const [isIconListActive, setIsIconListActive] = useState(false)

    const input1Ref = useRef(null)
    const input2Ref = useRef(null)

    useEffect(() => {
        setProductName(sliceString(15, name))
    }, [name])
    const handleKeyPress = (event, id) => {
        if (event.key && event.key === 'Enter') {
            const value = event.target.value
            if (checkLength(value, 3, 50)) {
                changeProduct(id, value)
            }
            handleBlur()
            input1Ref.current.blur()
        }
    }
    const handleFocus = () => {
        setProductName(name)
        setIsIconListActive(true)
    }
    const handleBlur = (event) => {
        let targ = event?.target ? event.target : null

        if (targ !== input1Ref.current && targ !== input2Ref.current) {
            setIsIconListActive(false)
            input1Ref.current.blur()
            setProductName(sliceString(15, name))
        }
    }
    const statusHandler = () => {
        delFromChoised(id)
        changeProduct(id)
    }

    return (
        <div className={`${isHelpActive ? 'wrapper-opacity' : ''}`}>
            <div
                className={`product-item table-row ${
                    isHelpActive ? 'product-item-opacity' : ''
                }`}
            >
                <div className="table-row-prev" />

                <div className="product-item_status table-row_status">
                    <p
                        className={`p ${status ? 'p_on' : 'p_off'}`}
                        onClick={statusHandler}
                    >{`${status ? 'on' : 'off'}`}</p>
                </div>
                <div className="product-item_product table-row_product">
                    {product}
                </div>
                <div className="product-item_id table-row_id">{id}</div>

                <div className="product-item_name table-row_name">
                    <img src={`${icon.url}`} alt={`${icon.id}`} />
                    <input
                        type="text"
                        ref={input1Ref}
                        readOnly={status}
                        onChange={(e) => setProductName(e.target.value)}
                        maxLength={50}
                        value={productName}
                        onMouseLeave={handleBlur}
                        onFocus={handleFocus}
                        onKeyDown={(e) => handleKeyPress(e, id)}
                    />
                    <div
                        className={`icon-list-wrapper ${
                            isIconListActive ? 'icon-list-wrapper_active' : ''
                        }`}
                        onMouseLeave={handleBlur}
                        ref={input2Ref}
                    >
                        <div
                            className="filters-list-wrapper_for-handler"
                            onMouseLeave={handleBlur}
                        >
                            <IconList
                                productsIcons={productIconsData}
                                changeProduct={changeProduct}
                                productIconId={icon.id}
                                usedIcons={
                                    status
                                        ? productIconsData.map((el) => el.id)
                                        : usedIcons
                                }
                                productId={id}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`table-row_additional ${
                        status ? 'table-row_additional_hide' : ''
                    }`}
                    onMouseEnter={status ? null : () => setIsHelpActive(true)}
                    onMouseLeave={status ? null : () => setIsHelpActive(false)}
                    onClick={() => {
                        if (!status) {
                            dellProduct(id)
                        }
                    }}
                >
                    <div className={`${tableIsActive ? '' : 'hide'}`}></div>
                    <p className="help">Удалить строку</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
