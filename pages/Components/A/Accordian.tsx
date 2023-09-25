import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'

const Accordian = () => {
    const [isFirstAccordActive, setIsFirstAccordActive] = useState(false);
    const [isSecondAccordActive, setIsSecondAccordActive] = useState(false);
    const [isThirdAccordActive, setIsThirdAccordActive] = useState(false);

    const handleFirstClick = (event: any) => {
        setIsFirstAccordActive(current => !current);
    };
    const handleSecondClick = (event: any) => {
        setIsSecondAccordActive(current => !current);
    };
    const handleThirdClick = (event: any) => {
        setIsThirdAccordActive(current => !current);
    };

    return (
        <div className='px-24'>

            {/* Accordian 01 */}
            <div className="accordian">
                <div className="flex items-center justify-between px-6 py-2 rounded-t-lg bg-[#124412] text-[#fff] ">
                    <h1 className='cursor-pointer text-2xl font-bold'>Green Icon Reward</h1>
                    {/* <MdOutlineKeyboardArrowUp /> */}
                    <b className='text-4xl cursor-pointer bg-[#439c56] rounded-md' onClick={handleFirstClick}>
                        <RiArrowDownSLine />
                    </b>
                </div>
                {isFirstAccordActive && <ul className="px-10 text-xl gap-4 py-4 bg-[#42c936da] text-[#fff] grid justify-start list-disc">
                    <li>Complete Any Primary 4 Courses</li>
                    <li>Complete Any Tutorials</li>
                    <li>Collect 2-badge from UDTech Badge-Room</li>
                    <li>PC Specs after completing Process is 4gb-RAM 128gb-HDD</li>
                    <li>For Upwork, you do not already have an account on Upwork.</li>
                </ul>}
            </div>

            {/* Accordian 02 */}
            <div className="accordian">
                <div className="flex items-center justify-between px-6 py-2 bg-[#151244] text-[#fff] ">
                    <h1 className='cursor-pointer text-2xl font-bold'>Blue Icon Reward</h1>
                    {/* <MdOutlineKeyboardArrowUp /> */}
                    <b className='text-4xl cursor-pointer bg-[#6862c4] rounded-md' onClick={handleSecondClick}>
                        <RiArrowDownSLine />
                    </b>
                </div>
                {isSecondAccordActive && <ul className="px-10 text-xl gap-4 py-4 bg-[#4d3ed3da] text-[#fff] grid justify-start list-disc">
                    <li>Complete Any Basic 3 Courses</li>
                    <li>Complete Any 2-Tutorials</li>
                    <li>Collect 3-badge from UDTech Badge-Room</li>
                    <li>PC Specs after completing Process is 4gb-RAM 256gb-HDD</li>
                    <li>For Upwork, you have already an account on Upwork.</li>
                </ul>}
            </div>

            {/* Accordian 02 */}
            <div className="accordian">
                <div className="flex items-center justify-between px-6 py-2 bg-[#ff0000] text-[#fff] ">
                    <h1 className='cursor-pointer text-2xl font-bold'>Red Icon Reward</h1>
                    {/* <MdOutlineKeyboardArrowUp /> */}
                    <b className='text-4xl cursor-pointer bg-[#da6b6b] rounded-md' onClick={handleThirdClick}>
                        <RiArrowDownSLine />
                    </b>
                </div>
                {isThirdAccordActive && <ul className="px-10 text-xl gap-4 py-4 bg-[#e64545da] text-[#fff] grid justify-start list-disc">
                    <li>Complete Any Premium 3 Courses</li>
                    <li>Complete Any 3-Tutorials</li>
                    <li>Collect 5-badge from UDTech Badge-Room</li>
                    <li>PC Specs after completing Process is 6gb-RAM 256gb-SSD</li>
                    <li>For Upwork, you have already an account on Upwork.</li>
                </ul>}
            </div>

        </div>
    )
}

export default Accordian
