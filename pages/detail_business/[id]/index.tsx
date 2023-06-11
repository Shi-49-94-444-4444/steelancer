'use client'

import {
  Footer,
  ReviewBusiness,
  DetailBusiness,
  FormatBusiness,
  OfferBusiness
} from "@/app/components"
import { businessList, freelancerList } from "@/app/constants";
// import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/router";

interface Offer {
  comment: string;
  price: number;
  date: number;
}


const DetailBusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // const {
  //   register,
  //   handleSubmit,
  //   formState: {
  //     errors,
  //   },
  // } = useForm<FieldValues>({
  //   defaultValues: {
  //     price: '',
  //     mail: '',
  //   },
  // });

  //Get dữ liệu
  const item = businessList.find((item) => item.id === id);

  // Check
  if (!item) {
    return <div>Not Data</div>;
  }

  const {
    business,
    date,
    description,
    price,
    skills,
    title
  } = item;

  function calculateAveragePrice(offers?: Offer[]) {
    if (!offers || offers.length === 0) return 0;
    const totalPrice = offers.reduce((sum, offer) => sum + offer.price, 0);
    return totalPrice / offers.length;
  }

  const reviewContent = (
    <ReviewBusiness
      key={id as string}
      title={title}
      price={price}
    />
  )

  const detailContent = (
    <DetailBusiness
      key={id as string}
      id={id as string}
      description={description}
      skills={skills}
      date={date}
    />
  )

  const offerContent = (
    <div className="flex flex-col text-xl bg-white shadow-lg p-6">
      <h1 className="font-bold py-2">
        {freelancerList.filter(item => item.offer).length} freelancer offer average price of{" "}
        {freelancerList
          .filter(item => item.offer)
          .reduce((total, item) => total + calculateAveragePrice(item.offer), 0) /
          freelancerList.filter(item => item.offer).length}
        $ for this Job
      </h1>
      <div className="border-b-2"></div>
      {freelancerList
        .filter(item => item.offer) // Filter out items without an offer
        .slice(0, 100) // Limit the list to the first 100 items
        .map((item) => (
          <OfferBusiness
            key={item.id}
            src={item.src}
            title={item.title}
            offer={item.offer}
          />
        ))}
    </div>
  )

  const jobCompanyContent = (
    <div className="flex flex-col text-xl bg-white shadow-lg p-6">
      <h1 className="font-bold py-2">Other jobs from this company</h1>
      <div className="border-b-2"></div>

    </div>
  )

  const similarJobContent = (
    <div className="flex flex-col text-xl bg-white shadow-lg p-6">
      <h1 className="font-bold py-2">Similar jobs</h1>
      <div className="border-b-2"></div>

    </div>
  )

  return (
    <>
      <FormatBusiness
        review={reviewContent}
        detail={detailContent}
        offer={offerContent}
        jobCompany={jobCompanyContent}
        similarJob={similarJobContent}
      />
      <Footer />
    </>
  )
}

export default DetailBusinessPage