'use client'

import { useRouter } from "next/router";

const DetailFreelancerPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Freelancer Detail: {id}</h1>
    </div>
  );
};

export default DetailFreelancerPage;
