const baseURL = 'http://localhost:5000'

const product = '/products'
const urls = {
    product:{
        base: product,
        biId:(id:number)=>`${product}/${id}`
    }
}
export {
    baseURL,
    urls
}