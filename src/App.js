import './styles/app.scss'

import { useState } from 'react'
import FiltersMenu from './components/filtersMenu/FIltersMenu'
import ProductsList from './components/productsList/ProductsList'

const iconsDataBase = [
    {
        url: './static/icons/Amazon.svg',
        id: 'amazon',
    },
    {
        url: './static/icons/Autolux.svg',
        id: 'Autolux',
    },
    {
        url: './static/icons/Delivery.svg',
        id: 'Delivery',
    },
    {
        url: './static/icons/Ebay.svg',
        id: 'Ebay',
    },
    {
        url: './static/icons/fiveCircle.svg',
        id: 'fiveCircle',
    },
    {
        url: './static/icons/Group 80.svg',
        id: 'Group 80',
    },
    {
        url: './static/icons/Group 81.svg',
        id: 'Group 81',
    },
    {
        url: './static/icons/Group.svg',
        id: 'Group',
    },
    {
        url: './static/icons/Meest express.svg',
        id: 'Meest express',
    },
    {
        url: './static/icons/Modna kasta.svg',
        id: 'Modna kasta',
    },
    {
        url: './static/icons/Shop Logistics.svg',
        id: 'Shop Logistics',
    },
    {
        url: './static/icons/UPS.svg',
        id: 'UPS',
    },
    {
        url: './static/icons/Vector (1).svg',
        id: 'Vector (1)',
    },
    {
        url: './static/icons/Vector (2).svg',
        id: 'Vector (2)',
    },
    {
        url: './static/icons/ojjs.svg',
        id: 'ojjs',
    },
]

const productDataBase = [
    {
        status: false,
        product: 'XXXX-',
        id: 1,
        name: 'Rose gold',
        icon: {
            url: './static/icons/Amazon.svg',
            id: 'amazon',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 2,
        name: '39-й рзмер',
        icon: {
            url: './static/icons/UPS.svg',
            id: 'UPS',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 3,
        name: '39,5-й размер',
        icon: {
            url: './static/icons/Vector (2).svg',
            id: 'Vector (2)',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 4,
        name: 'Space grey',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
]
function App() {
    const [productsData, setProductsData] = useState(productDataBase)
    const [hasNewProductInput, setHasNewProductInput] = useState(false)
    const productIconsData = iconsDataBase

    const addProduct = (oneProductData) => {
        setProductsData((productsData) => [oneProductData, ...productsData])
    }

    const toggleNewProductInput = () => {
        setHasNewProductInput((hasNewProductInput) => !hasNewProductInput)
    }

    const toggleStatus = (productId) => {
        console.log('toggle', productId)
        const updatedDB = productsData.map((product) => {
            if (product.id === productId) {
                const oldStatus = product.status
                return { ...product, status: !oldStatus }
            } else return product
        })
        setProductsData(updatedDB)
    }

    return (
        <div className="App">
            <FiltersMenu toggleNewProductInput={toggleNewProductInput} />
            <ProductsList
                productsData={productsData}
                hasNewProductInput={hasNewProductInput}
                toggleNewProductInput={toggleNewProductInput}
                addProduct={addProduct}
                toggleStatus={toggleStatus}
            />
        </div>
    )
}

export default App
