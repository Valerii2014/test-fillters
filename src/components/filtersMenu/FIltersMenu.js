import './filtersMenu.scss'

import MenuItem from '../menuItem/MenuItem'

const FiltersMenu = () => {
    const filterFunction = () => {}
    return (
        <div className="filtersMenu table-row">
            <MenuItem
                className="table-row_status"
                name={'Статус'}
                placeHolder={'on/off'}
                filterFunction={filterFunction}
            />
            <MenuItem
                className="table-row_product"
                name={'Товар'}
                placeHolder={'????'}
                filterFunction={filterFunction}
            />
            <MenuItem
                className="table-row_id"
                name={'ID'}
                placeHolder={'id'}
                filterFunction={filterFunction}
            />
            <MenuItem
                className="table-row_name"
                name={'Название'}
                placeHolder={'Product name'}
                filterFunction={filterFunction}
            />
            <div className="table-row_additional filtersMenu_additional">
                <div className="add-product">
                    <div className="filtersMenu_button-item"></div>
                    <div className="filtersMenu_button-item"></div>
                </div>
                <div className="del-selected-products">
                    <div className="filtersMenu_button-item"></div>
                    <div className="filtersMenu_button-item"></div>
                </div>
            </div>
        </div>
    )
}

export default FiltersMenu
