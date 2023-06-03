'use client'

import DegreeItem from "./DegreeItem"

interface DegreeFreelancerProps {
    degree: any
}

const DegreeFreelancer: React.FC<DegreeFreelancerProps> = ({
  degree
}) => {
  return (
    degree.map((item?: any) => (
        <DegreeItem 
            key={item.title}
            title={item.title}
            place={item.place}
            date={item.date}
            description={item.description}
        />
    ))
  )
}

export default DegreeFreelancer