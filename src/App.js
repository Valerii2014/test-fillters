import './styles/app.scss'

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
        name: '',
        icon: {
            url: './static/icons/Amazon.svg',
            id: 'amazon',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 1,
        name: '',
        icon: {
            url: './static/icons/Amazon.svg',
            id: 'amazon',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 1,
        name: '',
        icon: {
            url: './static/icons/Amazon.svg',
            id: 'amazon',
        },
    },
    {
        status: false,
        product: 'XXXX-',
        id: 1,
        name: '',
        icon: {
            url: './static/icons/Amazon.svg',
            id: 'amazon',
        },
    },
]
function App() {
    return (
        <div className="App">
            <FiltersMenu />
            <ProductsList />
        </div>
    )
}

export default App
