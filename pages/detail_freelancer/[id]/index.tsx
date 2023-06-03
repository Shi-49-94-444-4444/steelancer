'use client'

import { FormatCusMd, Container, Footer } from "@/app/components";
import { 
  DegreeFreelancer, 
  DescFreelancer, 
  EducationFreelancer, 
  ProductFreelancer, 
  ReviewFreelancer, 
  SectionFreelancer 
} from "@/app/components/freelancer";
import { useRouter } from "next/router";
import { freelancerList } from "@/app/constants";

const DetailFreelancerPage = () => {
  const router = useRouter();
  const { id } = router.query;

  //Get dữ liệu
  const item = freelancerList.find((item) => item.id === id);

  // Check
  if (!item) {
    return <div>Not Data</div>;
  }

  const {
    src,
    title,
    label,
    description,
    price,
    star,
    city,
    country,
    recommence,
    performance,
    detail,
    skill,
    rateStar,
    numberComment,
    product,
    education,
    degree
  } = item;

  const ProductContent = (
    <ProductFreelancer product={product} />
  )

  const EducationContent = (
    <EducationFreelancer education={education} />
  )

  const DegreeContent = (
    <DegreeFreelancer degree={degree} />
  )

  return (
    <div>
      <FormatCusMd>
        <Container>
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-1 w-full h-auto">
              <ReviewFreelancer
                src={src}
                title={title}
                star={star}
                city={city}
                country={country}
                price={price}
                recommence={recommence}
              />
            </div>

            <div className="
                col-span-3 
                w-full 
                h-auto 
                space-y-5
              "
            >
              <DescFreelancer
                title={title}
                label={label}
                star={star}
                rateStar={rateStar}
                numberCmt={numberComment}
                performance={performance}
                detail={detail}
                skill={skill}
              />

              <SectionFreelancer
                title="Products"
                body={ProductContent}
              />

              <SectionFreelancer
                title="Education"
                body={EducationContent}
              />

              <SectionFreelancer
                title="Degree"
                body={DegreeContent}
              />

            </div>
          </div>
        </Container>
      </FormatCusMd >
      <Footer />
    </div>
  );
};

export default DetailFreelancerPage;
