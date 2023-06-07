'use client'

import { Footer, ReviewBusiness, DetailBusiness, FormatBusiness } from "@/app/components"
import { businessList } from "@/app/constants";
// import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/router";

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
      <h1 className="font-bold py-2">100 freelancer offer avange price for this Job</h1>
      <div className="border-b-2"></div>

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