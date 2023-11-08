/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const jobInfo = useLoaderData();
    const {_id, image, jobTitle, deadline, email, maxPrice, minPrice, category, description } = jobInfo;
    // console.log(jobInfo);

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target
        const updateData = {
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
        axios.put(`https://career-loom-server.vercel.app/jobs/${_id}`, updateData, {

            headers: {
                "Content-type": "application/json"
            },
        })
        .then (res =>  {
            if (res.data.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'Job updated successfully',
                    'success'
                  )
            }
        })
    } catch (error) {
        console.log(error.message);
    }

}
    return (
        <div>
            <Helmet>
            <title>CareerLoom | Update job</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-bold mt-10 text-center">Update your <span className="text-[orangered]">Job</span></h1>
            </div>
            <div>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 pt-2 px-4 mx-auto max-w-2xl lg:py-6">

                        <form onSubmit={handleUpdateJob} method="POST" action="#">
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employer Email</label>
                                    <input defaultValue={email} disabled type="email" name="email" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job Title</label>
                                    <input defaultValue={jobTitle} type="text" name="jobTitle" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type job name" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job imageURL</label>
                                    <input defaultValue={image} type="text" name="image" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter job imageURL" required />
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                                    <input defaultValue={deadline} type="date" name="date" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select  name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                        <option  selected="">{category}</option>
                                        <option  value="Web development">Web development</option>
                                        <option  value="Digital marketing">Digital marketing</option>
                                        <option  value="Graphics design">Graphics design</option>

                                    </select>
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum price</label>
                                    <input defaultValue={minPrice} type="text" name="minPrice" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter minimum price" required />
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Price</label>
                                    <input defaultValue={maxPrice} type="text" name="maxPrice" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter maximum price" required />
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea defaultValue={description} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="w-full inline-flex items-center justify-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[orangered] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-orange-700">
                                Update Job
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateJob;