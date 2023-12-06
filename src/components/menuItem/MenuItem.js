import './menuItem.scss'

const MenuItem = (props) => {
    const { name, placeHolder, filterFunction } = props
    return (
        <div className="menuItem">
            <div className="menuItem_name">{name}</div>
            <div className="menuItem_input">
                <input type="text" placeholder={placeHolder} />
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
    )
}

export default MenuItem
