
import { ButtonProps } from "../../dtos/button-dto"
import styleButton from "../../styles/button.module.css"

export const Button: React.FC<ButtonProps> = ({ width, label, height, background, ...res }) => {
    return (
        <button className={styleButton['button']}
            style={{ width, height, background }}
            {...res}
        >
            {label}
        </button>
    )
}