/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useEffect, useState } from "react";

const MyBid = () => {
    const [myBids, setMyBids] = useState([])

    useEffect(() => {

        try {
            axios.get("http://localhost:5000/mybids")
                .then(res => {
                    console.log(res.data);
                    setMyBids(res.data);
                })
        } catch (error) {
            console.log(error.message);
        }


    }, [])

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold mt-10 text-center">My <span className="text-[orangered]">Bids</span> </h1>
            </div>
            <div>

        <div class="overflow-x-auto mt-5">
            <div class="max-w-[1200px] mx-auto flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div class="w-full lg:w-5/6">
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">Job Title</th>
                                    <th class="py-3 px-6 text-left">Email</th>
                                    <th class="py-3 px-6 text-center">Deadline</th>
                                    <th class="py-3 px-6 text-center">Status</th>
                                    <th class="py-3 px-6 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="font-medium">React Project</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            
                                            <span className="font-semibold">Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <div class="flex items-center justify-center">
                                            
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <button className="text-white btn px-1 py-1 btn-primary hidden">Complete</button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



                {

                }
            </div>
        </div>
    );
};

export default MyBid;