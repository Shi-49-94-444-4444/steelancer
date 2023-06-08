'use client'

interface EducationItemProps {
    title?: string;
    place?: string;
    date?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
    title,
    place,
    date
}) => {
    return (
        <section className="p-4 gap-2 text-xl">
            <h1 className="font-medium mb-2">
                {title}
            </h1>
            <h2>
                {place}
            </h2>
            <h2>
                Date {date}
            </h2>
        </section>
    )
}

export default EducationItem