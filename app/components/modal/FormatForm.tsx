'use client'

interface FormatFormProps {
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
}

const FormatForm: React.FC<FormatFormProps> = ({
    title,
    body,
    footer,
}) => {
    return (
        <div className="px-10">
            <div className="
                px-20 
                h-cus-2 
                bg-white 
                rounded-50
              "
            >
                <div className="
                        flex 
                        flex-col 
                        space-y-5
                    "
                >
                    <div className="
                            flex 
                            flex-row 
                            justify-center
                        "
                    >
                        <h1 className="
                            font-mono 
                            text-pink-cus-bt 
                            text-8xl
                            "
                        >
                            {title}
                        </h1>
                    </div>
                    {body}
                    {footer}
                </div>
            </div>
        </div>
    )
}

export default FormatForm