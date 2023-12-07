import './filtersList.scss'

import { useEffect } from 'react'

import { sliceString } from '../../utils/sliceString'

const FiltersList = ({
    addSearchFilter,
    delSearchFilter,
    filtersData,
    clearInput,
    activeSearchFilters,
}) => {
    useEffect(() => {}, [filtersData])

    const checkTheFIlterActive = (name) => {
        if (typeof activeSearchFilters === 'Все') return false

        if (Array.isArray(activeSearchFilters)) {
            return activeSearchFilters.some((filterName) => filterName === name)
        }
    }

    return (
        <ul className="filters-list">
            <li
                className={
                    activeSearchFilters === 'Все'
                        ? 'filters-list-item_active'
                        : 'filters-list-item'
                }
                onClick={() => {
                    addSearchFilter('Все')
                    clearInput()
                }}
            >
                Все
            </li>
            {filtersData.map((filterName) => {
                const isActive = checkTheFIlterActive(filterName)
                const activeClass = isActive ? 'filters-list-item_active' : ''
                const onCLickCB = isActive
                    ? () => delSearchFilter(filterName)
                    : () => addSearchFilter(filterName)
                return (
                    <li
                        className={`filters-list-item ${activeClass}`}
                        key={filterName}
                        onClick={onCLickCB}
                    >
                        {sliceString(15, filterName)}
                    </li>
                )
            })}
        </ul>
    )
}

export default FiltersList
