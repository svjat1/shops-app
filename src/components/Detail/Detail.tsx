import {FC} from "react";

import {IProduct} from "../../interfaces/interfaces";
import css from "./Detail.module.css"

interface IProps {
    product: IProduct
}
const Detail:FC<IProps> = ({product}) => {
    const currentDate = new Date().toLocaleString();
    const {id,weight,name,count,comments,imageUrl} = product
    return (
        <div className={css.block}>
            <div className={css.main}>
                <div>
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
        </div>
        </div>
    );
};

export {Detail};