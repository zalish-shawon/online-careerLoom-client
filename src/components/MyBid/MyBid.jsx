/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useEffect, useState } from "react";
import MybidsTd from "./MybidsTd";

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
                            {
                                myBids.map(bid => <MybidsTd key={bid._id} bids={bid}></MybidsTd>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default MyBid;