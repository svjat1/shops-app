import {useEffect, useState} from "react";
import Modal from "react-modal";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {productActions} from "../../store";
import {Product} from "../product/Product";
import css from './Products.module.css'
import AddProductModal from "../modal/AddProductModal";


const Products = () => {
    const dispatch = useAppDispatch()
    const product = useAppSelector(state => state.product.products)


    const [modalOpen, setModalOpen] = useState(false);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<number | null>(null);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openDeleteModal = (id: number) => {
        setProductToDelete(id);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => setDeleteModalOpen(false);

    const handleDeleteConfirm = () => {
        if (productToDelete !== null) {
            dispatch(productActions.deleteProduct(productToDelete));

            dispatch(productActions.getAll());

            setDeleteModalOpen(false);
        }
    };


    useEffect(() => {
        dispatch(productActions.getAll())
    }, [dispatch])


    console.log(product)
    return (
        <div className={css.block}>
            <div>
            <button onClick={openModal}>Add new product</button>
            </div>
        <div className={css.main}>
            <AddProductModal isOpen={modalOpen} closeModal={closeModal}/>
            {product.map(product => <Product key={product.id} product={product} openDeleteModal={openDeleteModal}/>)}

            <Modal isOpen={deleteModalOpen} onRequestClose={closeDeleteModal}>
                <h2>Ви впевнені, що хочете видалити цей товар?</h2>
                <button onClick={handleDeleteConfirm}>Підтвердити</button>
                <button onClick={closeDeleteModal}>Скасувати</button>
            </Modal>
        </div>
        </div>
    );
};

export {Products};