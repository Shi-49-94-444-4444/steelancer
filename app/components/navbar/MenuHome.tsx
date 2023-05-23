'use client'

interface MenuHomeProps {
    onClick: () => void;
    label : string;
}

const MenuHome : React.FC<MenuHomeProps> = ({
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

export default MenuHome