'use client'

import { BiSearch } from 'react-icons/bi'
import FormatCusSm from '../FormatCusSm'

const GetStarted = () => {
    return (
        <FormatCusSm>
            <div className='flex flex-row w-full'>
                <h1 className='
                    font-bold 
                    text-[60px]
                    '
                >Are you looking for <br />Freelancers?
                </h1>
            </div>
            <div className='
                        flex 
                        flex-row 
                        w-full 
                        mt-10 
                        mb-10
                        '
                    >
                <h1 className='
                        text-2xl 
                        leading-[30px] 
                          
                        font-regular 
                        text-gray-900 
                        text-opacity-60
                        '
                    >
                    <span>Hire </span>
                    <span className='font-semibold'>
                        great freelancers, Fast
                    </span>
                    . SteelanceX will help
                    <br />
                    you hire elite freelancers at a moments notice
                </h1>
            </div>
            <div className='
                flex 
                flex-row 
                w-full 
                pt-20
                '
            >
                <button
                    onClick={() => { }}
                    className="
                                w-auto
                                md:w-auto
                                text-sm
                                py-5
                                px-10
                                bg-pink-500
                                text-white
                                font-semibold
                                transition
                                cursor-pointer
                                hover:bg-pink-600
                                rounded-[10px]
                                text-[20px]
                                whitespace-nowrap
                            "
                >
                    Hire a freelancer
                </button>
                <div className='ml-10'>
                    <div className='
                            flex 
                            flex-row-reverse 
                            bg-white 
                            shadow-md 
                            py-2 
                            px-3 
                            rounded-[10px]
                            '
                        >
                        <div className='
                            p-4 
                            bg-pink-500 
                            rounded-full 
                            text-white 
                            ml-5
                            cursor-pointer
                            '
                            onClick={() => {}}
                        >
                            <BiSearch size={18} />
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Search freelance work'
                                className='
                                    w-full 
                                    ml-5 
                                    mr-10 
                                    px-3 
                                    py-3 
                                    focus:outline-none
                                    border-0
                                    '
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FormatCusSm>
    )
}

export default GetStarted