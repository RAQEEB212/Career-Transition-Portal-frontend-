import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useLocation } from 'react-router-dom';

// const randomJobs = [1, 2,45];

const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    const location = useLocation();
    const query = location.state?.query;
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    return (
        <div>
            <Navbar />
            {query && (
              <div className="max-w-7xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold">{query}</h2>
                {location.state?.description && (
                  <p className="text-gray-600 mt-1">{location.state.description}</p>
                )}
              </div>
            )}
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            console.log("jobs",job.title);
                            const cleanedTitle = job.title?.trim();

                            const mapping = {
                                "Engineering": {
                                    title: "Engineering",
                                    subfield: "Mechanical, Civil, Electrical",
                                    description: "Explore design, mechanical, and civil roles"
                                },
                                "Education": {
                                    title: "Education",
                                    subfield: "Teaching, Curriculum Planning",
                                    description: "Find teaching and curriculum planning jobs"
                                },
                                "Business": {
                                    title: "Business",
                                    subfield: "Marketing, HR, Finance",
                                    description: "Search marketing, HR, and sales opportunities"
                                },
                                "Computer Science": {
                                    title: "Computer Science",
                                    subfield: "Software Development, AI, Cybersecurity",
                                    description: "Look into software and tech careers"
                                },
                                "Medicine": {
                                    title: "Medicine",
                                    subfield: "Medicine,Nursing,Dentistry, Pharmacy",
                                    description: "Browse healthcare and clinical roles"
                                }
                            };

                            const sampleText = mapping[cleanedTitle] || {
                                title: job.title,
                                description: "Discover opportunities in this field"
                            };
                            console.log("sample ",sampleText.title);

                            return (
                                <div key={job._id}>
                                    <p className="text-sm font-semibold">{sampleText.title}</p>
                                    <div className="flex flex-wrap gap-2 my-1">
                                        {sampleText.subfield?.split(',').map((sub, idx) => (
                                            <Button
                                                key={idx}
                                                className="bg-white text-black hover:bg-blue-100 border "
                                            >
                                                {sub.trim()}
                                            </Button>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-500">{sampleText.description}</p>

                                    <Job job={job} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse