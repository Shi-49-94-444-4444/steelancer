'use client'

import {
    Footer,
    FormatList,
    MultiFilter,
    SearchCus,
    FreelancerList,
    RatingFilter,
    FilterForm
} from "@/app/components"
import {
    freelancerList,
    optionArrangement,
    optionExperience,
    optionJob,
    optionPrice,
    optionSkill,
    optionTypeWork
} from "@/app/constants"
import Select from "react-select"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import CategoryResponse from "@/models/categoryResponse"
import JobResponse from "@/models/jobResponse"
import JobService from '../services/jobs';
import CategoryService from '../services/category'

interface FreelancerItem {
    id: string;
    src: string;
    title?: string;
    label?: string;
    description?: string;
    price?: number;
    star: number
}

interface BodyContentProps {
    freelancerList: FreelancerItem[];
}

const list_freelancer = () => {
    const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
    const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
    const [freelancerCount, setFreelancerCount] = useState(0); // Tổng số job
    const [freelancers, setFreelancers] = useState<JobResponse[]>([]); // Job trong trang hiện tại
    const [offerFrom, setOfferFrom] = useState(0);
    const [offerTo, setOfferTo] = useState(0);
    const [filterCategories, setFilterCategories] = useState<number[]>([]);

    // Lấy danh sách các mục trên trang hiện tại
    const getCurrentPageItems = (): FreelancerItem[] => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return freelancerList.slice(startIndex, endIndex);
    };

    useEffect(() => {
        JobService.getCount()
            .then(jobCountResponse => {
                setFreelancerCount(jobCountResponse);
            })
        CategoryService.get()
            .then(categoriesResponse => {
                setCategories(categoriesResponse.value);
            })
    }, [])

    useEffect(() => {
        JobService.getOpenJob({
            skip: currentPage * itemsPerPage,
            offerFrom: offerFrom,
            offerTo: offerTo,
            categories: filterCategories
        })
            .then(jobsResponse => {
                setFreelancers(jobsResponse.value);
                setFreelancerCount(jobsResponse["@odata.count"])
            })
    }, [currentPage, offerFrom, offerTo, filterCategories])

    const getDurationLeft = (job: JobResponse) => {
        const expiredDate = new Date(job.JobExpiredDate); // Replace with your start date
        const currentDate = new Date();
        const timeDifference = expiredDate.getTime() - currentDate.getTime();
        const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        return dayDifference;
    }

    const getCategories = (job: JobResponse) => {
        const categoryIds = job.Categories;
        let categoriesString = "";
        categoryIds.forEach(cId => {
            categoriesString += `${categories.find(c => c.Id === cId)?.Name}, `
        })

        return categoriesString.replace(/, $/, '');
    }

    // Xử lý sự kiện chuyển trang
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const filterContent = (
        <div className="
                flex
                flex-col
                gap-1
            "
        >
            <h1 className="text-xl">
                Filter:
            </h1>

            <FilterForm
                onPriceChange={(from, to) => {
                    setOfferFrom(!isNaN(from) ? from : 0);
                    setOfferTo(!isNaN(to) ? to : 0);
                }}
                // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
                onTimeChange={(from, to) => { }}
            />
            <MultiFilter
                title="Skill"
                placeholder="Choose skill"
                options={optionSkill}
            />
            {/* <MultiFilter
                title="What job do you need?"
                placeholder="Choose field of work"
                options={optionJob}
            /> */}
            {/* <MultiFilter
                title="Prior experience"
                placeholder="Choose Experience"
                options={optionExperience}
            />
            <MultiFilter
                title="Hourly Rate (USD)"
                placeholder="Choose Price/Hour"
                options={optionPrice}
            />
            <div className="
                    w-full 
                    h-auto 
                    px-3 
                    py-3 
                    gap-5 
                    border-[1px] 
                    rounded-15 
                    shadow-lg 
                    bg-white
                "
            >
                <h1 className="font-semibold my-3">Working</h1>
                <RatingFilter onChange={handleRatingFilterChange} />
            </div>
            <div className="
                    w-full 
                    h-auto 
                    px-3 
                    py-3 
                    gap-5 
                    border-[1px] 
                    rounded-15 
                    shadow-lg 
                    bg-white
                "
            >
                <h1 className="font-semibold my-3">Working</h1>
                <Select
                    placeholder="Choose arrangement"
                    options={optionArrangement}
                    className="my-3"
                    isClearable
                    isMulti
                    filterOption={(option, inputValue) =>
                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                    }
                />
                <Select
                    placeholder="Choose type"
                    options={optionTypeWork}
                    className="my-3"
                    isClearable
                    isMulti
                    filterOption={(option, inputValue) =>
                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                    }
                />
            </div> */}
        </div>
    )

    const BodyContent = (
        // return (
        <div className="flex flex-col gap-3">
            {getCurrentPageItems().map((item) => (
                <FreelancerList
                    key={item.id}
                    {...item}
                />
            ))}

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={Math.ceil(freelancerList.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName="
                        flex 
                        gap-2 
                        justify-center
                        my-20
                    "
                pageLinkClassName="
                        px-3 
                        py-2 
                        rounded 
                        bg-gray-200 
                        text-gray-700
                    "
                activeLinkClassName="
                        font-bold 
                        bg-gray-500 
                        text-white
                    "
                disabledClassName="
                        opacity-50 
                        cursor-not-allowed
                    "
            />
        </div>
        // );
    );
    return (
        <div>
            <SearchCus />
            <FormatList
                filter={filterContent}
                body={BodyContent}
            />
            <Footer />
        </div>
    )
}

export default list_freelancer