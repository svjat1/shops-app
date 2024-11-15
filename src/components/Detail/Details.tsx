import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {productActions} from "../../store";
import {Detail} from "./Detail";

const Details = () => {
    const dispatch = useAppDispatch();
    const {product} = useAppSelector(state => state.product)
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
            dispatch(productActions.getDetail(Number(id)))
        console.log(`Fetching product with ID: ${id}`);
    }, [dispatch,id])
    return (
        <div>
            {product && <Detail key={product.id} product={product}/>}
        </div>
    );
};

export {Details};