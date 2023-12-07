import './styles/app.scss'

import { useState, useEffect } from 'react'
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
    {
        status: false,
        product: 'XXXX-',
        id: 5,
        name: 'Space grey',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 6,
        name: 'Space greysddsdsds',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 7,
        name: 'Space gredsfsdfdsfy',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 8,
        name: 'Red grey and more other',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 9,
        name: 'Space grey',
        icon: {
            url: './static/icons/Group.svg',
            id: 'Group',
        },
    },
]
function App() {
    const productIconsData = iconsDataBase
    const [productsData, setProductsData] = useState(productDataBase)
    const [hasNewProductInput, setHasNewProductInput] = useState(false)
    const [usedIcons, setUsedIcons] = useState([])
    const [productDataWithFilters, setProductDataWithFilters] =
        useState(productsData)
    const [activeSearchFilters, setActiveSearchFilters] = useState('Все')
    const [choisedProducts, setChoisedProducts] = useState([])
    const filtersData = [
        ...new Set(productsData.map((product) => product.name)),
    ]
    const updateUsedIcon = () => {
        setUsedIcons([...new Set(productsData.map((prod) => prod.icon.id))])
    }

    useEffect(() => {
        updateUsedIcon()
    }, [productsData])

    const addSearchFilter = (name) => {
        if (name === 'Все') {
            setActiveSearchFilters('Все')
        } else if (Array.isArray(activeSearchFilters)) {
            setActiveSearchFilters((activeSearchFilters) => [
                ...activeSearchFilters,
                name,
            ])
        } else {
            setActiveSearchFilters([name])
        }
    }
    console.log(activeSearchFilters)
    const delSearchFilter = (name) => {
        const newFilters = activeSearchFilters.filter(
            (filterName) => filterName !== name
        )
        if (newFilters.length !== 0) {
            setActiveSearchFilters(newFilters)
        } else {
            setActiveSearchFilters('Все')
        }
    }

    const addProduct = (oneProductData) => {
        setProductsData((productsData) => [oneProductData, ...productsData])
        updateUsedIcon()
    }

    const dellChoisedProducts = () => {
        setProductsData((prodData) =>
            prodData.filter((prod) => !productIsChoised(prod.id))
        )
        setChoisedProducts([])
        updateUsedIcon()
    }

    const productIsChoised = (productId) => {
        return choisedProducts.some(
            (choisedProductId) => choisedProductId === productId
        )
    }
    const toggleChoisedProduct = (productId) => {
        if (productIsChoised(productId)) {
            setChoisedProducts((choisedProducts) =>
                choisedProducts.filter(
                    (choisedProductId) => choisedProductId !== productId
                )
            )
        } else {
            setChoisedProducts((choisedProducts) => [
                ...choisedProducts,
                productId,
            ])
        }
    }

    const toggleNewProductInput = () => {
        setHasNewProductInput((hasNewProductInput) => !hasNewProductInput)
    }

    const changeProduct = (productId, nameOrStatusOrIconData = null) => {
        const argumentType = typeof nameOrStatusOrIconData
        const updatedDB = productsData.map((product) => {
            if (product.id === productId) {
                if (nameOrStatusOrIconData === null)
                    return { ...product, status: !product.status }
                else if (argumentType === 'number' || argumentType === 'string')
                    return { ...product, name: nameOrStatusOrIconData }
                else if (argumentType === 'object')
                    return { ...product, icon: nameOrStatusOrIconData }
            } else return product
        })
        setProductsData(updatedDB)
    }

    const createProductWithFilt = () => {
        if (activeSearchFilters === 'Все') return productsData
        if (Array.isArray(activeSearchFilters)) {
            return productsData.filter((product) => {
                if (
                    activeSearchFilters.some(
                        (activFilt) => activFilt === product.name
                    )
                ) {
                    return product
                }
            })
        }
    }

    return (
        <div className="App">
            <FiltersMenu
                toggleNewProductInput={toggleNewProductInput}
                activeSearchFilters={activeSearchFilters}
                filtersData={filtersData}
                addSearchFilter={addSearchFilter}
                delSearchFilter={delSearchFilter}
                choisedProducts={choisedProducts}
                dellChoisedProducts={dellChoisedProducts}
            />
            <ProductsList
                productsData={createProductWithFilt()}
                productIconsData={productIconsData}
                hasNewProductInput={hasNewProductInput}
                addProduct={addProduct}
                changeProduct={changeProduct}
                toggleNewProductInput={toggleNewProductInput}
                toggleChoisedProduct={toggleChoisedProduct}
                choisedProducts={choisedProducts}
                usedIcons={usedIcons}
            />
        </div>
    )
}

export default App
