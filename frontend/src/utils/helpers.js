export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND'
    }).format(number)
}