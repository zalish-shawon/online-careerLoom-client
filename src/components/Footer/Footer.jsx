/* eslint-disable react/no-unknown-property */

const Footer = () => {
    return (
        <div>
            <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                {/* <!-- Grid --> */}
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                    <div class="col-span-full hidden lg:col-span-1 lg:block">
                        <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
                        <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2022 Preline.</p>
                    </div>
                    {/* <!-- End Col --> */}

                    <div>
                        <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Product</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Pricing</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Changelog</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Docs</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Download</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div>
                        <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Company</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">About us</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Blog</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Careers</a> <span class="inline text-blue-600 dark:text-blue-500">— We're hiring</span></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Customers</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Newsroom</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Sitemap</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div>
                        <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Resources</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Community</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Help & Support</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">eBook</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">What's New</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div>
                        <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Developers</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Api</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">GitHub</a> <span class="inline text-blue-600 dark:text-blue-500">— New</span></p>
                        </div>

                        <h4 class="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Industries</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Financial Services</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Education</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}

            
            </footer>
        </div>
    );
};

export default Footer;