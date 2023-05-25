'use client'

interface BackgroundProps {
    children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = ({
    children
}) => {
    return (
        <div className="
              absolute 
              inset-0 
              bg-cover 
              bg-center 
              w-full 
              h-[980px]
            "
            style={{
                backgroundImage: 'url("./images/background.png")',
            }}>
            {children}
        </div>
    )
}

export default Background