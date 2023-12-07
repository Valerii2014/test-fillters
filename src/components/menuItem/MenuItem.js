import './menuItem.scss'
import { useState, useRef, useEffect } from 'react'
import FiltersList from '../filtersList/FIltersList'
import { sliceString } from '../../utils/sliceString'
const MenuItem = ({ name, placeHolder, filterFunctions }) => {
    const {
        addSearchFilter,
        delSearchFilter,
        filtersData,
        activeSearchFilters,
    } = filterFunctions

    const [ownPlaceHolder, setOwnPlaceHolder] = useState(placeHolder)
    const [ownFiltersData, setOwnFiltersData] = useState(filtersData)
    const [ownActiveSearchFilters, setOwnActiveSearchFilters] =
        useState(activeSearchFilters)
    const [inputValue, setInputValue] = useState('')
    const [isActiveList, setIsActiveList] = useState(false)
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)

    useEffect(() => {
        setOwnActiveSearchFilters(activeSearchFilters)
    }, [activeSearchFilters])

    const handleMouseEnter = (event) => {
        if (event.target === input1Ref.current) {
            input1Ref.current.focus()
            setIsActiveList(true)
            if (ownActiveSearchFilters.length === 0) {
                clearInput()
            } else if (Array.isArray(ownActiveSearchFilters)) {
                setOwnPlaceHolder(ownActiveSearchFilters.join(', '))
            }
        }
    }

    const handleBlur = (event) => {
        const target = event.target
        if (target !== input1Ref.current && target !== input2Ref.current) {
            setIsActiveList(false)
            input1Ref.current.blur()
        }
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
        const newFiltersData = filtersData.filter((filterName) => {
            let answer = true
            for (let i = 0; i < inputValue.length; i++) {
                if (
                    inputValue[i].toLowerCase() !== filterName[i].toLowerCase()
                ) {
                    answer = false
                }
            }
            return answer
        })
        setOwnFiltersData(newFiltersData)
    }

    const clearInput = () => {
        setInputValue('')
        setOwnFiltersData(filtersData)
        setOwnPlaceHolder(placeHolder)
        setOwnActiveSearchFilters(activeSearchFilters)
    }

    return (
        <div className="menuItem">
            <div className="menuItem_name">{name}</div>
            <div className="menuItem_input">
                <input
                    type="text"
                    placeholder={sliceString(17, ownPlaceHolder)}
                    ref={input1Ref}
                    value={inputValue}
                    onChange={handleChange}
                    onMouseLeave={handleBlur}
                    onMouseEnter={handleMouseEnter}
                />
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
            <div
                ref={input2Ref}
                onMouseLeave={handleBlur}
                className={`filters-list-wrapper ${
                    isActiveList ? 'filters-list-wrapper_active' : ''
                }`}
            >
                {filterFunctions ? (
                    <div className="filters-list-wrapper_for-handler">
                        <FiltersList
                            clearInput={clearInput}
                            addSearchFilter={addSearchFilter}
                            delSearchFilter={delSearchFilter}
                            filtersData={ownFiltersData}
                            activeSearchFilters={ownActiveSearchFilters}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default MenuItem
