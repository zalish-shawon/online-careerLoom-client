/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PostedJobsCard = ({ job, postedJobs ,setPostedjobs }) => {
    const {_id, image, jobTitle, deadline, maxPrice, minPrice, category, description } = job;

    const handleDeletejob = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://career-loom-server.vercel.app/jobs/${_id}`)
                .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your job has been deleted.',
                            'success'
                          )

                          const remainingItem = postedJobs.filter(item => item._id !== _id);
                          setPostedjobs(remainingItem)
                    }
                })
    
              
            }
          })
    }

    return (

        <div>
            <div class=" rounded overflow-hidden shadow-lg">
                <img class="w-full h-[200px]" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">{jobTitle}</div>
                    <p class="text-gray-700 text-base">
                        {description?.slice(0, 90)}<span><a className="text-blue-400"></a></span>
                    </p>
                    
                </div>
                <div className="flex items-center">
                <p className="font-semibold text-red-500 px-6">Deadline: {deadline}</p>
                <div class="badge badge-primary badge-outline">{category}</div>                
                </div>
                <div className="flex gap-1 items-center px-6 mt-2">
                    <p className="font-semibold text-gray-500">Min price</p> <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${minPrice}</span>
                    <p className="font-semibold text-gray-500">Max price</p>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${maxPrice}</span>
                
                </div>
                <div class="px-6 pt-4 pb-2 flex gap-3">
                    <button onClick={() => handleDeletejob(_id)} type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Delete
                    </button>
                    <Link to={`/updateJob/${_id}`}>
                    <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Update
                    </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default PostedJobsCard;