/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import BidReqTd from "./BidReqTd";
import NoDataFound from "../NotDataFound/NoDataFound";
import { Helmet } from "react-helmet-async";

const BidRequest = () => {
    const {user} = useContext(AuthContext);
    const [bidRequest, setBidRequest] = useState([]);

    useEffect (() => {
        try {
            axios.get("https://career-loom-server.vercel.app/mybids", {withCredentials: true})
                .then(res => {
                    // console.log(res.data);
                    setBidRequest(res.data);
                })
        } catch (error) {
            console.log(error.message);
        }
    }, [])


    const bidReq = bidRequest.filter(req => user?.email === req.email);
    console.log(bidReq);

    const handleSorting = () => {
        const sortedData = [...bidRequest]
        // console.log(sortedData);
        sortedData.sort((a,b) => a.status.localeCompare(b.status)); 
        setBidRequest(sortedData);
        // console.log(myBids);
    }


    return (
        <div>
            <Helmet>
            <title>CareerLoom | Bid request</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-bold mt-10 mb-3 text-center">Bid <span className="text-[orangered]">Request</span> </h1>
            </div>
            {
                bidReq.length === 0 ?
                <NoDataFound></NoDataFound>
                :
                <div class="overflow-x-auto mt-5">
                <div className="flex justify-center mb-3"><button onClick={handleSorting} className="text-white rounded-lg px-2 py-1 btn btn-outline btn-primary">Sort by status</button></div>
            <div class="max-w-[1200px] mx-auto flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div class="w-full lg:w-5/6">
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">Job Title</th>
                                    <th class="py-3 px-6 text-left">Email</th>
                                    <th class="py-3 px-6 text-center">Deadline</th>
                                    <th class="py-3 px-6 text-center">Price</th>
                                    <th class="py-3 px-6 text-center">Status</th>
                                    <th class="py-3 px-6 text-center">Action</th>
                                </tr>
                            </thead>
                            {
                                bidReq.map(req => <BidReqTd key={req._id} reqs={req}></BidReqTd>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
            }
            </div>
     
    );
};

export default BidRequest;
