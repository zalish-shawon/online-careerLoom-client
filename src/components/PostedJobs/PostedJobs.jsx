import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PostedJobsCard from "./PostedJobsCard";

const PostedJobs = () => {
    const {user} = useContext(AuthContext);
    const [postedJobs, setPostedjobs] = useState([]);
    
    useEffect(()=>{
        try {
            axios.get('http://localhost:5000/jobs')
            .then(res => setPostedjobs(res.data))
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    const myJobs = postedJobs.filter(item => item.email === user?.email);





    return (
        <div>
             <div>
                <h1 className="text-4xl font-bold mt-10 text-center">My Posted <span className="text-[orangered]">Jobs</span></h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto py-8">
                    {
                        myJobs.map(job => <PostedJobsCard key={job._id} job={job}></PostedJobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostedJobs;