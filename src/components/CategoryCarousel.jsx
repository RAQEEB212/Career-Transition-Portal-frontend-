import React from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Engineering",
    "Education",
    "Business",
    "Computer Science",
    "Medicine"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div
            className="flex flex-wrap justify-center gap-20 my-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/category-bg.png)' }}
        >
            <Button
                onClick={() => navigate('/JobApplied')}
                className="border font-semibold rounded-xl px-6 py-32 bg-blue-300 duration-300 flex flex-col items-center justify-center  bg-opacity-5 hover:bg-blue-100 shadow-md hover:shadow-lg"
            >
                <img src="/job-tracking.png" alt="Application Tracking" className="h-32 w-32 mb-4" />
                <h2 className="text-lg font-semibold text-black">Application Tracking</h2>
                <p className="text-xs text-gray-600">Track the status of your job applications</p>
            </Button>
            {category.map((cat) => {
                let icon = "❓";
                switch (cat.trim()) {
                    case "Engineering":
                        icon = "🛠️";
                        break;
                    case "Education":
                        icon = "🎓";
                        break;
                    case "Business":
                        icon = "💼";
                        break;
                    case "Computer Science":
                        icon = "💻";
                        break;
                    case "Medicine":
                        icon = "🏥";
                        break;
                }
                return (
                    <Button
                        key={cat}
                        onClick={() => searchJobHandler(cat)}
                        className="border font-semibold  px-6 py-12 duration-300 flex flex-col items-center justify-center bg-white bg-opacity-80 hover:bg-blue-100 shadow-md hover:shadow-lg"
                    >
                        <span className="text-5xl">{icon}</span>
                        <div className="text-sm mt-2 text-black font-medium text-center">{cat.trim()}</div>
                    </Button>
                );
            })}
        </div>
    )
}

export default CategoryCarousel