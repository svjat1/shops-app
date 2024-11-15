import {IProduct} from "../interfaces/interfaces";
import {IRes} from "../types/IRes";
import {apiService} from "./apiService";
import {urls} from "../constants";

const productService={
    getAll:():IRes<IProduct[]> => apiService.get(urls.product.base),
    getByID:(id:number):IRes<IProduct>=> apiService.get(urls.product.biId(id)),
    addProduct:(data:IProduct):IRes<IProduct>=>apiService.post(urls.product.base, data),
    delete:(id:number):IRes<void>=> apiService.delete(urls.product.biId(id)),
}

export {
    productService
}