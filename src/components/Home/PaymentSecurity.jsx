
const PaymentSecurity = () => {
    return (
        <div>
            <div>
            <h1 className="border-2 border-[#95eecd77] p-3 text-5xl font-bold text-center mt-16 ">Our  <span className="text-[#95EECD]">Payment Security</span></h1>
            </div>
            <div className="mt-10 bg-[#F0F2F5] p-10">
            <h1 className="text-3xl font-bold ">Get Work Done fater On Meer , <br />
                With Confidence</h1>
               <div className="flex flex-col lg:flex-row gap-7">
                <div >
                <div className="flex justify-start items-baseline gap-2 mt-7">
                    <img src="https://askbootstrap.com/preview/meer/images/checkmark.svg"
                     alt="" />
                     <div>
                     <h3 className="text-xl font-semibold">Payment Protection, Guaranteed</h3>
                     <p className="text-lg text-gray-500">Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
                     </div>
                </div>
                
                <div className="flex justify-start items-baseline gap-2 mt-7">
                    <img src="https://askbootstrap.com/preview/meer/images/checkmark.svg"
                     alt="" />
                     <div>
                     <h3 className="text-xl font-semibold">Know The Price Upfront</h3>
                     <p className="text-lg text-gray-500">Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.</p>
                     </div>
                </div>
                <div className="flex justify-start items-baseline gap-2 mt-7">
                    <img src="https://askbootstrap.com/preview/meer/images/checkmark.svg"
                     alt="" />
                     <div>
                     <h3 className="text-xl font-semibold">We’re Here For You 24/7</h3>
                     <p className="text-lg text-gray-500">Meer is here for you, anything from answering any questions to resolving any issues, at any time.</p>
                     </div>
                </div>
                </div>
                <img className="w-[600px]" src="https://askbootstrap.com/preview/meer/images/video.svg" alt="" />
               </div>
        </div>
        </div>
    );
};

export default PaymentSecurity;