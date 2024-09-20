import formStyle from "../../styles/form.module.css";
import { Button } from "../buttons/button";
import { HeaderViewModel } from "../header/headerViewModel";

export const ProductForm: React.FC = () => {
    const {
        formData,
        handleSubmit,
        handleChange,
    } = HeaderViewModel();
    return (
        <form className={formStyle.form} onSubmit={handleSubmit}>
            <p className={formStyle.title}>Cadastrar produto</p>

            <label>
                <input
                    className={formStyle.input}
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
                <span>Cole o caminho da imagem</span>
            </label>

            <label>
                <input
                    className={formStyle.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <span>Nome do produto</span>
            </label>

            <label>
                <input
                    className={formStyle.input}
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <span>Preço</span>
            </label>

            <label>
                <input
                    className={formStyle.input}
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
                <span>Categoria</span>
            </label>

            <label>
                <input
                    className={formStyle.input}
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <span>Descrição</span>
            </label>


            <Button
                className="submit"
                type="submit"
                label="Cadastrar produto"
                width="85%"
            />

        </form>
    );
};
