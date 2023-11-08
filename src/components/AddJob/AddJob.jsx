/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target
        const jobData = {
            email: form.email.value,
            jobTitle: form.jobTitle.value,
            image: form.image.value,
            deadline: form.date.value,
            maxPrice: form.maxPrice.value,
            minPrice: form.minPrice.value,
            category: form.category.value,
            description: form.description.value,
        }

        try {
            axios.post(`https://career-loom-server.vercel.app/jobs`, jobData, {
                headers: {
                    'Content-type': 'application/json',
                }
            })
            .then(res => {
                Swal.fire(
                    'Welcome!',
                    'Job has been added!',
                    'success'
                  )
                  
                  navigate('/postedJobs')
                
            })

        } catch (error) {
            console.log(error.message);
        }
        form.reset();
        
        // console.log(taskData);
    }


    return (
        <div>
            <Helmet>
            <title>CareerLoom | Add job</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-bold mt-10 text-center">Add <span className="text-[orangered]">Jobs</span></h1>
            </div>
            <div>
                <div>
                    <section class="bg-white dark:bg-gray-900">
                        <div class="py-8 pt-2 px-4 mx-auto max-w-2xl lg:py-6">

                            <form onSubmit={handleAddJob} method="POST" action="#">
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employer Email</label>
                                        <input defaultValue={user?.email} disabled type="email" name="email" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job Title</label>
                                        <input type="text" name="jobTitle" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type job name" required />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job imageURL</label>
                                        <input type="text" name="image" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter job imageURL" required />
                                    </div>
                                    <div class="w-full">
                                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                                        <input type="date" name="date" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                                    </div>
                                    <div>
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                            <option selected="">Select category</option>
                                            <option value="Web development">Web development</option>
                                            <option value="Digital marketing">Digital marketing</option>
                                            <option value="Graphics design">Graphics design</option>
                                            
                                        </select>
                                    </div>
                                    <div>
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum price</label>
                                        <input type="text" name="minPrice" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter minimum price" required />
                                    </div>
                                    <div>
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Price</label>
                                        <input type="text" name="maxPrice" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter maximum price" required />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium justify-center text-white bg-[orangered] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-orange-700 w-full">
                                    Add Job
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddJob;