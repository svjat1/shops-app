export interface IProduct {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: { width: number; height: number };
    weight: string;
    comments: IComment[];
}
interface IComment {
    id: number;
    productId: number;
    description: string;
    date: string;
}
export interface IProductString {
    id: string;
    imageUrl: string;
    name: string;
    count: number;
    size: { width: number; height: number };
    weight: string;
    comments: string[];
}

export interface IProductsState {
    products: IProduct[];
    product: IProduct | null;
    loading: boolean;
    isVisible: boolean
}
