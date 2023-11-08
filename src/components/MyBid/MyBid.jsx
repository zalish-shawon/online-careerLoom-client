
/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MybidsTd from "./MybidsTd";
import { AuthContext } from "../Provider/AuthProvider";
import NoDataFound from "../NotDataFound/NoDataFound";
import { Helmet } from "react-helmet-async";

const MyBid = () => {
    const {user} = useContext(AuthContext)
    const [myBids, setMyBids] = useState([])

    useEffect(() => {

        try {
            axios.get(`https://career-loom-server.vercel.app/mybids`, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                    setMyBids(res.data);
                })
        } catch (error) {
            console.log(error.message);
        }

    }, [])

    const onlymyBid = myBids.filter(bid => user?.email === bid.bidderEmail);
        // console.log(onlymyBid);


    const handleSorting = () => {
        const sortedData = [...myBids]
        // console.log(sortedData);
        sortedData.sort((a,b) => a.statusforRequester.localeCompare(b.statusforRequester)); 
        setMyBids(sortedData);
        // console.log(myBids);
    }

    // console.log(axios);

    return (
        <div>
            <Helmet>
            <title>CareerLoom | My bid</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-bold mt-10 mb-3 text-center">My <span className="text-[orangered]">Bids</span> </h1>
            </div>
            <div>
        {
            onlymyBid.length === 0 ? 
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
                                    <th class="py-3 px-6 text-center">Status</th>
                                    <th class="py-3 px-6 text-center">Action</th>
                                </tr>
                            </thead>
                            {
                                onlymyBid.map(bid => <MybidsTd key={bid._id} bids={bid}></MybidsTd>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
        }
            </div>
        </div>
    );
};

export default MyBid;