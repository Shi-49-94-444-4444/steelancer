'use client'

interface MenuMoreProps {
    onClick: () => void;
    label : string;
}

const MenuMore : React.FC<MenuMoreProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className="
                px-6
                hover:text-pink-500
                transition
            "
        >
            {label}
        </div>
    )
}

export default MenuMore