/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const navigate = useNavigate()
    const jobDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const {  image, jobTitle, deadline, maxPrice, minPrice, category, description, email } = jobDetails;

    const handleBideJob = (e) => {
        e.preventDefault();
        const form = e.target
        const bidData = {
            jobTitle: jobTitle,
            email: form.email.value,
            bidderEmail: form.bidderEmail.value,
            deadline: form.date.value,
            status: 'pending',
            statusforRequester: 'pending',
            price: form.price.value,

        }

        try {
            axios.post(`https://career-loom-server.vercel.app/mybids`, bidData,{
                headers: { 'Content-Type': 'application/json'}
            })
            .then(res => {
                console.log(res.data);
                Swal.fire(
                    'Welcome!',
                    'Job has successfully bidden',
                    'success'
                  )
                  navigate('/mybids')
            })
        } catch (error) {
            console.log(error.message);
        }
        // console.log(bidData);
    }


    return (
        <div>
            <Helmet>
            <title>CareerLoom | Details</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-bold mt-10 text-center">Posted <span className="text-[orangered]">Job</span> Details</h1>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-6 mx-auto flex flex-col" bis_skin_checked="1">

                    <div class="lg:w-4/6 mx-auto" bis_skin_checked="1">
                        <div class="rounded-lg h-64 overflow-hidden" bis_skin_checked="1">
                            <img alt="content" class="object-cover object-center h-full w-full" src={image} />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10" bis_skin_checked="1">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8" bis_skin_checked="1">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400" bis_skin_checked="1">
                                    <img src={image} alt="" />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center" bis_skin_checked="1">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Posted: {email}</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" bis_skin_checked="1"></div>


                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" bis_skin_checked="1">
                                <p class="text-3xl font-semibold mb-3">{jobTitle}</p>
                                <p class="leading-relaxed text-lg mb-4">{description}</p>
                                <div>
                                    <div className="flex items-center">
                                        <p className="font-semibold text-red-500 px-6">Deadline: {deadline}</p>
                                        <div class="badge badge-primary badge-outline">{category}</div>
                                    </div>
                                    <div className="flex gap-1 items-center px-6 mt-2">
                                        <p className="font-semibold text-gray-500">Min price</p> <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${minPrice}</span>
                                        <p className="font-semibold text-gray-500">Max price</p>
                                        <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">${maxPrice}</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h1 className="text-4xl font-bold text-center">Place your <span className="text-[blue]">Job</span> bid</h1>
                <div>
                <section class="bg-white dark:bg-gray-900">
                        <div class="py-8 pt-2 px-4 mx-auto max-w-2xl lg:py-6">

                            <form onSubmit={handleBideJob}  method="POST" action="#">
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employer Email</label>
                                        <input defaultValue={email} disabled type="email" name="email" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bidder Email</label>
                                        <input defaultValue={user?.email} disabled type="email" name="bidderEmail" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required />
                                    </div>
                                    
                                    <div class="w-full">
                                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                                        <input type="date" name="date" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                                    </div>
                                
                                    <div>
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter minimum price" required />
                                    </div>
                                    
                                    
                                </div>
                                {
                                    user?.email === email ? 
                                    <button disabled type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Bid is unavailable
                                </button>
                                :
                                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[orangered] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Bid on this project
                                </button>
                                }
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;