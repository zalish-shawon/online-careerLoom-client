import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PostedJobsCard from "./PostedJobsCard";
import NoDataFound from "../NotDataFound/NoDataFound";
import { Helmet } from "react-helmet-async";

const PostedJobs = () => {
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

    const myJobs = postedJobs.filter(item => item.email === user?.email);


    return (
        <div>
            <Helmet>
            <title>CareerLoom | Posted jobs</title>
            </Helmet>
            <div>
            <h1 className="text-4xl font-bold mt-10 mb-3 text-center">My Posted <span className="text-[orangered]">Jobs</span></h1>
            </div>
            {
                myJobs.length === 0 ? 
                <NoDataFound></NoDataFound>
                :
                <div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto py-8">
                    {
                        myJobs.map(job => <PostedJobsCard key={job._id} job={job} postedJobs ={postedJobs} setPostedjobs={setPostedjobs} ></PostedJobsCard>)
                    }
                </div>
            </div> 
            }
        </div>
    );
};

export default PostedJobs;