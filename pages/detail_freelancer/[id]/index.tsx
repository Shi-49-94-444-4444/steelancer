'use client'

import { FormatCusMd, Container, Footer } from "@/app/components";
import {
  DegreeFreelancer,
  DescFreelancer,
  EducationFreelancer,
  FormatFreelancer,
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

  const reviewContent = (
    <ReviewFreelancer
      src={src}
      title={title}
      star={star}
      city={city}
      country={country}
      price={price}
      recommence={recommence}
    />
  )

  const bodyContent = (
    <>
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
    </>
  )

  return (
    <>
      <FormatCusMd>
        <Container>
          <FormatFreelancer
            review={reviewContent}
            body={bodyContent}
          />
        </Container>
      </FormatCusMd >
      <Footer />
    </>
  );
};

export default DetailFreelancerPage;
