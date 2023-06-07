'use client'

import { useEffect, useState } from 'react';
import {
    BusinessList,
    FormatList,
    SearchCus,
    MultiFilter,
    FilterForm,
    Footer
} from "@/app/components"
import {
    optionSkill,
    optionLanguage,
    optionPayment,
    optionPlace,
    optionWork,
} from "@/app/constants"
import JobList from "@/app/components/JobList"
import ReactPaginate from 'react-paginate';
import JobService, { JobFilter } from '../services/jobs';
import CategoryService from '../services/category'
import JobResponse from '@/models/jobResponse';
import CategoryResponse from '@/models/categoryResponse';

interface BodyContentProps {
    // businessList: BusinessItem[];
}

// const FilterCus: React.FC = () => {
//     const [priceFrom, setPriceFrom] = useState<number | null>(null);
//     const [priceTo, setPriceTo] = useState<number | null>(null);
//     const [selectedTimeFrom, setSelectedTimeFrom] = useState<Date | null>(null);
//     const [selectedTimeTo, setSelectedTimeTo] = useState<Date | null>(null);

//     const handlePriceChange = (from: number, to: number) => {
//         setPriceFrom(from);
//         setPriceTo(to);
//     };

//     const handleTimeChange = (from: Date, to: Date | null) => {
//         setSelectedTimeFrom(from);
//         setSelectedTimeTo(to);
//     };

//     return (
//         <FilterForm onPriceChange={handlePriceChange} onTimeChange={handleTimeChange} />
//     );
// };

const list_business = () => {
    const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
    const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
    const [jobCount, setJobCount] = useState(0); // Tổng số job
    const [jobs, setJobs] = useState<JobResponse[]>([]); // Job trong trang hiện tại
    const [offerFrom, setOfferFrom] = useState(0);
    const [offerTo, setOfferTo] = useState(0);
    const [filterCategories, setFilterCategories] = useState<number[]>([]);

    useEffect(() => {
        JobService.getCount()
            .then(jobCountResponse => {
                setJobCount(jobCountResponse);
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
                setJobs(jobsResponse.value)
            })
    }, [currentPage, offerFrom, offerTo])

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
                    if (!isNaN(from)) {
                        setOfferFrom(from);
                    }
                    if (!isNaN(to)) {
                        setOfferTo(to);
                    }
                }}
                onTimeChange={(from, to) => {
                }}
            />
            {/* <MultiFilter
                title="Language"
                placeholder="Choose Language"
                options={optionLanguage}
            /> */}
            <MultiFilter
                title="Skill"
                placeholder="Choose Skill"
                options={categories.map(c => ({
                    value: c.Id, label: c.Name
                }))}
            />
            {/* <MultiFilter
                title="Place"
                placeholder="Choose Place"
                options={optionPlace}
            /> */}
            {/* <MultiFilter
                title="Work"
                placeholder="Choose Work"
                options={optionWork}
            />
            <MultiFilter
                title="Payment"
                placeholder="Choose Payment"
                options={optionPayment}
            /> */}
        </div>
    )

    const BodyContent: React.FC<BodyContentProps> = () => {
        return (
            <div className="flex flex-col gap-3">
                {jobs.map((item) => (
                    <JobList
                        key={item.Id}
                        title={item.Name}
                        date={getDurationLeft(item)}
                        description={item.Description}
                        categories={getCategories(item)}
                        price={item.Offer}
                        businessName={item.BusinessName}

                    />
                ))}

                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."
                    pageCount={Math.ceil(jobCount / itemsPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName="
                        flex gap-2 
                        justify-center 
                        my-20
                    "
                    pageLinkClassName="
                        px-3 py-2 
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
        );
    };

    return (
        <div>
            <SearchCus />
            <FormatList
                filter={filterContent}
                body={<BodyContent />}
            />
            <Footer />
        </div>
    )
}

export default list_business