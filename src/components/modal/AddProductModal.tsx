import React, {ChangeEvent, FormEvent, useState} from "react";
import Modal from 'react-modal'

import {useAppDispatch} from "../../hooks/reduxHooks";
import {productActions} from "../../store";
import {IProduct} from "../../interfaces/interfaces";

Modal.setAppElement("#root");

const AddProductModal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
    const [product, setProduct] = useState<IProduct>({
        id: +"",
        name: "",
        imageUrl: "",
        count: 0,
        size: { width: 0, height: 0 },
        weight: "",
        comments: [],
    });
    const dispatch = useAppDispatch();


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => ({...prev, [name]: value,}));
    };

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if (product.name && product.imageUrl && product.count > 0 && product.size.width > 0 && product.size.height > 0) {
            dispatch(productActions.addProduct(product));
            closeModal();
        } else {
            alert("Field required!");
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Add Product" className="modal">
            <h2>Add new product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name your product</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="imageUrl">URL img</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="count">Quantity </label>
                <input
                    type="number"
                    id="count"
                    name="count"
                    value={product.count}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="size">Size (width x height)</label>
                <input
                    type="text"
                    id="size"
                    name="size"
                    value={`${product.size.width} x ${product.size.height}`}
                    onChange={(e) => {
                        const [width, height] = e.target.value.split("x").map(Number);
                        setProduct((prev) => ({
                            ...prev,
                            size: { width, height },
                        }));
                    }}
                    required
                />
                <label htmlFor="weight">Weight</label>
                <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={product.weight}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add product</button>
            </form>
            <button onClick={closeModal}>Close</button>
        </Modal>
    );
};

export default AddProductModal;
