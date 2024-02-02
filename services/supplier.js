export const getSuppliers = () => {
    return useNuxtApp().$axiosApiClient.get('/suppliers')
}

export const createSupplier= (supplier) => {
    return useNuxtApp().$axiosApiClient.post('/suppliers',supplier)
}