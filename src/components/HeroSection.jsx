import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 md:px-20 bg-[#E8F1FA] font-sans">
            <div className="flex-1 text-left">
                <h1 className="text-[48px] font-extrabold text-[#1F2937] mb-4 leading-tight">
                    Career Transition Portal
                </h1>
                <p className="text-[18px] text-[#4B5563] max-w-md font-normal">
                    The Career Transition Portal (CTP) aims to support graduate students by providing functionalities with
                    an inside look of how a graduate student’s career could look like with additional features such as resume
                    building, job listings, and career progressions.
                </p>
            </div>
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                <img src="/landing.png" alt="Student at laptop" className="max-w-sm w-full" />
            </div>
        </div>
    )
}

export default HeroSection