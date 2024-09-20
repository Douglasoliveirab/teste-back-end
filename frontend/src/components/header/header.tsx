import { Button } from "../buttons/button";
import headerStyle from "../../styles/header.module.css";
import { HeaderViewModel } from "./headerViewModel";
import { ReactNode } from "react";
import { ProductForm } from "../forms/form";

interface HeaderProps {
    content?: ReactNode
}

export const Header: React.FC<HeaderProps> = () => {

    const {
        modal,
        handleCloseModal,
        handleClick
    } = HeaderViewModel();

    return (
        <>
            <div className={headerStyle.header}>
                <div className={headerStyle.container_items_header}>
                    <h4>teste backend - frontend</h4>
                    <Button
                        label="Cadastrar produto"
                        onClick={handleClick}
                    />
                </div>
            </div>
            {modal && (
                <div className={headerStyle.container_modal}>
                    <div className={headerStyle.modal_content}>
                        <p onClick={handleCloseModal} className={headerStyle.close}>X</p>
                        <ProductForm />
                    </div>
                </div>
            )}
        </>

    );
};
