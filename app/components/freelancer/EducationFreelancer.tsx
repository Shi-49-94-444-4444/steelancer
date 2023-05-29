'use client'

import EducationItem from "./EducationItem"

interface EducationFreelancerProps {
    education: any
}

const EducationFreelancer: React.FC<EducationFreelancerProps> = ({
    education
}) => {
  return (
    education.map((item?: any) => (
        <EducationItem 
            key={item.title}
            title={item.title}
            place={item.place}
            date={item.date}
        />
    ))
  )
}

export default EducationFreelancer