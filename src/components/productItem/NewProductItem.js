import './productItem.scss'

import { useState, useEffect, useRef } from 'react'

import checkLength from '../../utils/checkLength'

const NewProductItem = ({ isVisible, addProduct, toggleNewProductInput }) => {
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
        if (isVisible) {
            input1Ref.current.focus()
        }
    }, [isVisible])

    const handleKeyPress = (event) => {
        const value = event.target.value
        if (event.key === 'Enter') {
            if (event.target === input1Ref.current) {
                if (!checkLength(value, 1, 3)) {
                    input1Ref.current.focus()
                    return
                }
                setProductId(value)
                input2Ref.current.focus()
                return
            } else if (event.target === input2Ref.current) {
                if (!checkLength(value, 1, 50)) {
                    input2Ref.current.focus()
                    return
                }
                setProductName(value)
            }
            saveNewProduct(productId, productName, productIcon)
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
        toggleNewProductInput()
        addProduct(newProductData)
        setProductId('')
        setProductName('')
        setProductIcon(productIconDefault)
    }
    const buildNewProductRow = () => {
        return (
            <div className="product-item table-row">
                <div className="product-item_status table-row_status">
                    {'off'}
                </div>
                <div className="product-item_product table-row_product">
                    {'XXXX-'}
                </div>
                <div className="product-item_id table-row_id">
                    <input
                        type="text"
                        ref={input1Ref}
                        onChange={(e) => setProductId(e.target.value)}
                        maxLength={3}
                        value={productId}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className="product-item_name table-row_name">
                    <img src={`${productIcon.url}`} alt={`${productIcon.id}`} />
                    <input
                        type="text"
                        ref={input2Ref}
                        onChange={(e) => setProductName(e.target.value)}
                        maxLength={50}
                        value={productName}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>
        )
    }

    return isVisible ? buildNewProductRow() : <></>
}

export default NewProductItem
