/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */




const AllJobsCard = ({ job }) => {
    const { image, jobTitle, deadline, maxPrice, minPrice, category, description } = job;

    
    return (

        <div>
            <div class=" rounded overflow-hidden shadow-lg">
                <img class="w-full h-[200px]" src={image} alt="Sunset in the mountains" />
                <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">{jobTitle}</div>
                    <p class="text-gray-700 text-base">
                        {description?.slice(0, 90)}<span><a className="text-blue-400"></a></span>
                    </p>
                    
                </div>
                <div className="flex items-center">
                <p className="font-semibold text-red-500 px-6">Deadline: {deadline}</p>
                <div class="badge badge-primary badge-outline">{category}</div>                
                </div>
                <div className="flex gap-1 items-center px-6 pb-4 mt-2">
                    <p className="font-semibold text-gray-500">Min price</p> <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500">${minPrice}</span>
                    <p className="font-semibold text-gray-500">Max price</p>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500">${maxPrice}</span>
                
                </div>
                
            </div>
        </div>

    );
};

export default AllJobsCard;