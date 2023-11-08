/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import axios from "axios";

const BidReqTd = ({reqs}) => {
    const {_id,jobTitle, bidderEmail, deadline, price, status} = reqs;
    const newStatus = {
        status: 'in progress',
        statusforRequester: 'in progress',
    }

    const rejectStatus = {
        status: 'rejected',
        statusforRequester: 'cancelled',
    }

    const handleJobAccept = (_id) => {
        try {
            axios.patch(`https://career-loom-server.vercel.app/mybids/${_id}`, newStatus, {
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


    const handleJobReject = (_id) => {
        try {
            axios.patch(`https://career-loom-server.vercel.app/mybids/${_id}`, rejectStatus, {
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
            <td class="py-3 px-6 text-left">
                <div class="flex items-center">

                    <span className="font-semibold">${price}</span>
                </div>
            </td>
            <td class="py-3 px-6 text-center">
                <span class="bg-purple-200 font-semibold text-purple-600 py-1 px-3 rounded-full text-xs">{status}</span>
            </td>
            <td class="py-3 px-6 text-center">
                {
                    status === 'in progress' || status === 'rejected' || status === 'completed' ? 
                    <div>
                    <button disabled onClick={() => handleJobAccept(_id)} 
                     className="text-white btn px-1 py-1 btn-primary mr-2">Accept</button>
                 <button disabled onClick={() => handleJobReject(_id)}  className="text-white btn px-1 py-1 btn-secondary">Reject</button>
                </div>
                    :
                    <div>
                        <button onClick={() => handleJobAccept(_id)} 
                         className="text-white btn px-1 py-1 btn-primary mr-2">Accept</button>
                     <button onClick={() => handleJobReject(_id)}  className="text-white btn px-1 py-1 btn-secondary">Reject</button>
                    </div>
                }
            </td>
        </tr>

    </tbody>
    );
};

export default BidReqTd;