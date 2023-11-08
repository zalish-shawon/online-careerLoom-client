/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevJobs from './WebDevJobs';
import DigitalJobs from './DigitalJobs';
import GraphicsJobs from './GraphicsJobs';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        try {
            axios.get('https://career-loom-server.vercel.app/jobs')
            .then(res => setJobs(res.data))
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    const webJobs = jobs.filter(job => job.category === "Web development")
    // console.log(webJobs);
    const digitalJobs = jobs.filter(job => job.category === "Digital marketing")

    const graphicsJobs = jobs.filter(job => job.category === "Graphics design")


    return (

        <Tabs className="mt-9">
            <TabList>
                <Tab>Web development</Tab>
                <Tab>Digital marketing</Tab>
                <Tab>Graphics design</Tab>

            </TabList>

            <TabPanel>
                {/* fist tab */}
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        webJobs.map(job => <WebDevJobs key={job._id} job={job}></WebDevJobs>)
                    }
               </div>
            </TabPanel>

            <TabPanel>
              {/* second tab */}
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        digitalJobs.map(job => <DigitalJobs key={job._id} job={job}></DigitalJobs>)
                    }
               </div>


            </TabPanel>
            <TabPanel>
               {/* third tab */}
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        graphicsJobs.map(job => <GraphicsJobs key={job._id} job={job}></GraphicsJobs>)
                    }
               </div>


            </TabPanel>
            
        </Tabs>

    );
};

export default JobCategory;