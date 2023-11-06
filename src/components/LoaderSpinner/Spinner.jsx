/* eslint-disable react/no-unknown-property */
const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[400px]'>
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    );
};

export default Spinner;