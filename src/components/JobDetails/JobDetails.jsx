import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const jobDetails = useLoaderData();
    console.log(jobDetails);



    return (
        <div>
            
        </div>
    );
};

export default JobDetails;