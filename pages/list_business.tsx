'use client'

import { useState } from 'react';
import {
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
    businessList
} from "@/app/constants"
import BusinessList from "@/app/components/BusinessList"
import ReactPaginate from 'react-paginate';

interface BusinessItem {
    title: string;
    date: number;
    description: string;
    skills: string;
    price: number;
    business: string;
}

interface BodyContentProps {
    businessList: BusinessItem[];
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
                }}
                onTimeChange={(from, to) => {
                }}
            />
            <MultiFilter
                title="Language"
                placeholder="Choose Language"
                options={optionLanguage}
            />
            <MultiFilter
                title="Skill"
                placeholder="Choose Skill"
                options={optionSkill}
            />
            <MultiFilter
                title="Place"
                placeholder="Choose Place"
                options={optionPlace}
            />
            <MultiFilter
                title="Work"
                placeholder="Choose Work"
                options={optionWork}
            />
            <MultiFilter
                title="Payment"
                placeholder="Choose Payment"
                options={optionPayment}
            />
        </div>
    )

    const BodyContent: React.FC<BodyContentProps> = ({ businessList }) => {
        const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
        const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại

        // Lấy danh sách các mục trên trang hiện tại
        const getCurrentPageItems = (): BusinessItem[] => {
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return businessList.slice(startIndex, endIndex);
        };

        // Xử lý sự kiện chuyển trang
        const handlePageChange = (selectedPage: { selected: number }) => {
            setCurrentPage(selectedPage.selected);
        };

        return (
            <div className="flex flex-col gap-3">
                {getCurrentPageItems().map((item) => (
                    <BusinessList
                        key={item.title}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        skills={item.skills}
                        price={item.price}
                        business={item.business}
                    />
                ))}

                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."
                    pageCount={Math.ceil(businessList.length / itemsPerPage)}
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
                body={<BodyContent businessList={businessList} />}
            />
            <Footer />
        </div>
    )
}

export default list_business