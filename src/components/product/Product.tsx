git statusimport {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IProduct} from "../../interfaces/interfaces";
import css from "./Product.module.css"


interface IProps {
    product: IProduct;
    openDeleteModal: (id:number) => void
}

const Product:FC<IProps> = ({product,openDeleteModal}) => {
    const navigate = useNavigate()

const todo = (product: IProduct)=>{
    navigate(`/detail/${id}`)
}
    const {count,id,name,weight,imageUrl,comments} = product
    const currentDate = new Date().toLocaleString();
    return (
        <div className={css.main}>
         <div onClick={()=>todo(product)}>
            <img src={imageUrl} alt={name} style={{width:'250px'}}/>
            <h4>name:{name}</h4>
            <h4>id:{id}</h4>
            <h4>count:{count}</h4>
            <h4>weight:{weight}</h4>
             <div>
                 <h4>Comments:</h4>
                 {comments.length > 0 ? (
                     comments.map((comment) => (
                         <div key={comment.id}>
                             <p>{comment.description}</p>
                             <small>{currentDate}</small>
                         </div>
                     ))
                 ) : (
                     <p>No comments available</p>
                 )}
             </div>
        </div>
             <button onClick={() => openDeleteModal(id)}>Delete</button>
        </div>
    );
};

export {Product};