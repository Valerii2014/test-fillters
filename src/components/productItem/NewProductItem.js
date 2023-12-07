import './productItem.scss'

import { useState, useEffect, useRef } from 'react'

import checkLength from '../../utils/checkLength'

const NewProductItem = ({
    hasNewProductInput,
    addProduct,
    toggleNewProductInput,
}) => {
    const productIconDefault = {
        url: './static/icons/Group.svg',
        id: 'Group',
    }

    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [productIcon, setProductIcon] = useState(productIconDefault)

    useEffect(() => {
        if (hasNewProductInput) {
            input1Ref.current.focus()
        }
    }, [hasNewProductInput])

    const handleKeyPress = (event) => {
        const value = event.target.value
        if (event.key && event.key === 'Enter') {
            if (event.target === input1Ref.current) {
                if (!checkLength(value, 1, 3)) {
                    input1Ref.current.focus()
                    return
                }
                setProductId(value)
                input2Ref.current.focus()
                return
            } else if (event.target === input2Ref.current) {
                if (!checkLength(value, 3, 50)) {
                    input2Ref.current.focus()
                    return
                }
                setProductName(value)
            }
            saveNewProduct(productId, productName, productIcon)
        }
    }
    const clearInputs = () => {
        setProductId('')
        setProductName('')
        setProductIcon(productIconDefault)
        toggleNewProductInput()
    }
    const blurInput = (event) => {
        const targ = event.target
        if (
            !targ.classList.contains('product-item') &&
            targ !== input1Ref.current &&
            targ !== input2Ref.current
        ) {
            console.log('may be&')
            clearInputs()
        }
    }

    const saveNewProduct = (productId, productName, productIcon) => {
        const newProductData = {
            status: false,
            product: 'XXXX-',
            id: productId,
            name: productName,
            icon: productIcon,
        }
        addProduct(newProductData)
        clearInputs()
    }

    return (
        <div className={`product-item table-row`}>
            <div className="table-row-prev" />

            <div className="product-item_status table-row_status">{'off'}</div>
            <div className="product-item_product table-row_product">
                {'XXXX-'}
            </div>
            <div className="product-item_id table-row_id">
                <input
                    type="text"
                    ref={input1Ref}
                    placeholder="ID"
                    onChange={(e) => setProductId(e.target.value)}
                    maxLength={3}
                    onBlur={blurInput}
                    value={productId}
                    onKeyDown={handleKeyPress}
                />
            </div>
            <div className="product-item_name table-row_name">
                <img src={`${productIcon.url}`} alt={`${productIcon.id}`} />
                <input
                    type="text"
                    ref={input2Ref}
                    placeholder="Name"
                    onChange={(e) => setProductName(e.target.value)}
                    maxLength={50}
                    onBlur={blurInput}
                    value={productName}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    )
}

export default NewProductItem
