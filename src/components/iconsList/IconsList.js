import './iconsList.scss'

const IconList = ({
    productsIcons,
    changeProduct,
    productIconId,
    productId,
    usedIcons,
}) => {
    const createIconList = () => {
        return productsIcons.map((iconData) => {
            const { url, id } = iconData
            const isDisable =
                id === productIconId ||
                usedIcons.some((useIcon) => useIcon === id)
                    ? true
                    : false
            const onClickCB = isDisable
                ? null
                : () => changeProduct(productId, iconData)
            const disabledClass = isDisable ? 'icons-list_item_disable' : ''
            return (
                <img
                    src={`${url}`}
                    alt={`${id}`}
                    key={id}
                    className={`icons-list_item ${disabledClass}`}
                    onClick={onClickCB}
                />
            )
        })
    }
    return <div className="icons-list">{createIconList()}</div>
}

export default IconList
