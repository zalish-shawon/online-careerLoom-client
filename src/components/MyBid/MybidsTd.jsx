/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const MybidsTd = ({bids}) => {
  const {jobTitle, bidderEmail, deadline, status} = bids;
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
                    <span class="bg-purple-200 font-semibold text-purple-600 py-1 px-3 rounded-full text-xs">{status}</span>
                </td>
                <td class="py-3 px-6 text-center">
                    <button className="text-white btn px-1 py-1 btn-primary ">Complete</button>
                </td>
            </tr>


        </tbody>
    );
};

export default MybidsTd;