/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import axios from "axios";

const MybidsTd = ({bids}) => {
  const {_id, jobTitle, bidderEmail, deadline, statusforRequester} = bids;

  const completeStatus = {
    status: 'completed',
    statusforRequester: 'completed'
  }

  const handleJobComplete = (_id) => {
    try {
        axios.patch(`https://career-loom-server.vercel.app/mybids/${_id}`, completeStatus, {
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(res => console.log(res.data))
        
        window.location.reload();

    } catch (error) {
        console.log(error.message);
    }
  }



    return (
        <tbody class="text-gray-600 text-sm font-light">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                        <span class="font-medium">{jobTitle}</span>
                    </div>
                </td>
                <td class="py-3 px-6 text-left">
                    <div class="flex items-center">

                        <span className="font-semibold">{bidderEmail}</span>
                    </div>
                </td>
                <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                    <span className="font-semibold text-red-500">{deadline}</span>
                    </div>
                </td>
                <td class="py-3 px-6 text-center">
                    <span class="bg-purple-200 font-semibold text-purple-600 py-1 px-3 rounded-full text-xs">{statusforRequester}</span>
                </td>
                {
                    statusforRequester === "cancelled" || statusforRequester === 'completed' || statusforRequester === 'pending' ?
                    <td class="py-3 px-6 text-center">
                    <button disabled onClick={() =>  handleJobComplete(_id)} className="text-white btn px-1 py-1 bg-slate-200 ">Complete</button>
                    </td>
                    :
                    <td class="py-3 px-6 text-center">
                    <button onClick={() =>  handleJobComplete(_id)} className="text-white btn px-1 py-1 btn-primary ">Complete</button>
                    </td>
                     
                
                }
            </tr>


        </tbody>
    );
};

export default MybidsTd;