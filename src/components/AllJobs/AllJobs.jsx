import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import NoDataFound from "../NotDataFound/NoDataFound";
import { Helmet } from "react-helmet-async";
import AllJobsCard from "./AllJobsCard";

const AllJobs = () => {
    const {user} = useContext(AuthContext);
    const [postedJobs, setPostedjobs] = useState([]);
    useEffect(()=>{
        try {
            axios.get('https://career-loom-server.vercel.app/jobs')
            .then(res => setPostedjobs(res.data))
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    return (
        <div>
            <Helmet>
            <title>CareerLoom | All jobs</title>
            </Helmet>
            <div>
            <h1 className="text-4xl font-bold mt-10 mb-3 text-center">All Posted <span className="text-blue-700">Jobs</span></h1>
            </div>
            {
                postedJobs.length === 0 ? 
                <NoDataFound></NoDataFound>
                :
                <div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto py-8">
                    {
                        postedJobs.map(job => <AllJobsCard key={job._id} job={job} postedJobs ={postedJobs} setPostedjobs={setPostedjobs} ></AllJobsCard>)
                    }
                </div>
            </div> 
            }
        </div>
    );
};

export default AllJobs;