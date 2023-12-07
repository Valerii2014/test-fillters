export const sliceString = (maxLength, string) => {
    if (string.length > maxLength) {
        return string.slice(0, maxLength - 3) + '...'
    } else return string
}
