/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const WebDevJobs = ({ job }) => {
    const { _id, image, jobTitle, deadline, maxPrice, minPrice, category, description } = job;

    const currentDate = new Date();
    const onlyCurrentDate = currentDate.getDate();
    console.log(onlyCurrentDate);

    const itemsDeadLineDate = new Date(deadline);
    const onlyItemsDeadLineDate = itemsDeadLineDate.getDate();
    console.log(onlyItemsDeadLineDate);


    return (
        <div>
            <div class="max-w-2xl mx-auto">

                <div class="bg-white shadow-md border border-gray-200 rounded-lg lg:max-w-sm dark:bg-gray-800 dark:border-gray-700 h-[460px]">
                    
                        <img class="rounded-t-lg w-full h-[200px]" src={image} alt="" />
                   
                    <div class="p-5">
                        
                            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{jobTitle}</h5>
                        
                        <p class="font-normal text-gray-700 mb-1 dark:text-gray-400">{description.slice(0, 80)}</p>
                        <div>
                            <p className="font-semibold text-red-500">Deadline: {deadline}</p>

                            <div className="flex gap-1 items-center mt-3 mb-2">
                                <p className="font-semibold text-gray-500">Min price</p> <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${minPrice}</span>
                                <p className="font-semibold text-gray-500">Max price</p>
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${maxPrice}</span>

                            </div>

                        </div>
                       
                            {
                                onlyCurrentDate > onlyItemsDeadLineDate 
                                ?
                                <p className="text-red-500 text-xl mt-2 font-semibold">This job has expired</p>
                                :
                                <Link to={`/details/${_id}`}>
                                <button>
                                <a href="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Bid Now
                                    <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </button>
                            </Link>
                            }
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebDevJobs;