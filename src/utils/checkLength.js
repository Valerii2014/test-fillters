const checkLength = (value, requiredLength, maxLength) => {
    const valueLength = (value + '').length
    return valueLength >= requiredLength && valueLength <= maxLength
}

export default checkLength
