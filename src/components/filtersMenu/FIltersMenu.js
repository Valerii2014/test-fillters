import './filtersMenu.scss'

import MenuItem from '../menuItem/MenuItem'

const FiltersMenu = ({
    toggleNewProductInput,
    addSearchFilter,
    delSearchFilter,
    filtersData,
    activeSearchFilters,
    choisedProducts,
    dellChoisedProducts,
}) => {
    return (
        <div className="filtersMenu table-row">
            <span />
            <div className="menuItem">
                <div className="menuItem_name">Cтатус</div>
                <div className="menuItem_input">
                    <input type="text" placeholder="on/off" />
                    <div className="menuItem_input_arrow">
                        <svg
                            width="9"
                            height="5"
                            viewBox="0 0 9 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 4.65385L0 0.5L9 0.5L4.5 4.65385Z"
                                fill="black"
                                fillOpacity="0.7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="menuItem">
                <div className="menuItem_name">Товар</div>
                <div className="menuItem_input">
                    <input type="text" placeholder="????" />
                    <div className="menuItem_input_arrow">
                        <svg
                            width="9"
                            height="5"
                            viewBox="0 0 9 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 4.65385L0 0.5L9 0.5L4.5 4.65385Z"
                                fill="black"
                                fillOpacity="0.7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="menuItem">
                <div className="menuItem_name">ID</div>
                <div className="menuItem_input">
                    <input type="text" placeholder="id" />
                    <div className="menuItem_input_arrow">
                        <svg
                            width="9"
                            height="5"
                            viewBox="0 0 9 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 4.65385L0 0.5L9 0.5L4.5 4.65385Z"
                                fill="black"
                                fillOpacity="0.7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <MenuItem
                // className="table-row_name"
                name={'Название'}
                placeHolder={'Product name'}
                filterFunctions={{
                    addSearchFilter,
                    delSearchFilter,
                    filtersData,
                    activeSearchFilters,
                }}
            />
            <div className="table-row_additional filtersMenu_additional">
                <div className="add-product" onClick={toggleNewProductInput}>
                    <div className="filtersMenu_button-item"></div>
                    <div className="filtersMenu_button-item"></div>
                </div>
                <div
                    className={`del-selected-products ${
                        choisedProducts.length > 0
                            ? ''
                            : 'del-selected-products_hide'
                    }`}
                    onClick={dellChoisedProducts}
                >
                    <div className="filtersMenu_button-item"></div>
                    <div className="filtersMenu_button-item"></div>
                </div>
            </div>
        </div>
    )
}

export default FiltersMenu
