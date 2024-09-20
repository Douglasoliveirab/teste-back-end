import { Product } from "../dtos/product/product-dto"
import { useHomeViewModel } from "./Home.viewModel"
import { CardProduct } from "../components/cardProduct"
import { Header } from "../components/header/header"
import homeStyle from "../styles/home.module.css";
import { UpdateProductForm } from "../components/forms/updateProductForm";

export const Home: React.FC = () => {
    const {
        formData,
        modalUpdate,
        products,
        handleEditProduct,
        handleDeleteProduct,
        handleCloseModal,
        handleSubmit,
        handleChange
    } = useHomeViewModel()

    return (
        <div className={homeStyle.body}>
            <Header />

            <div className={homeStyle.container_products}>
                {products?.map((product: Product) => (
                    <div key={product.id} className={homeStyle.products}>
                        <CardProduct
                            image={product.image}
                            category={product.category}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            handleClickEditProduct={() => handleEditProduct(product)}
                            handleClickDeleteProduct={() => handleDeleteProduct(product.id)}
                        />
                    </div>
                ))}
            </div>
            {modalUpdate && (
                <div className={homeStyle.container_modal}>
                    <div className={homeStyle.modal_content}>
                        <p onClick={handleCloseModal} className={homeStyle.close}>X</p>
                        {modalUpdate && (
                            <UpdateProductForm
                                formData={formData}
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                            />
                        )}
                    </div>
                </div>
            )}



        </div >

    )
}