/* eslint-disable react/no-unknown-property */

const NoDataFound = () => {
    return (
        <div className="">
            <div class="bg-gray-100">
                <div class="flex h-[400px] items-center justify-center">
                    <div class="text-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/4076/4076503.png" alt="No Items" class="mx-auto mb-4" />
                        <h1 class="text-3xl font-semibold text-gray-700">No data Found</h1>
                        <p class="text-gray-500 mt-2">There are currently no data available.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoDataFound;