/* eslint-disable react/no-unknown-property */
import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-gradient-to-l from-violet-600 to-indigo-600'>
            <div className=' px-8 py-12 max-w-[90%] mx-auto'>
                <h1 className='text-5xl font-bold text-white'>Our Blog</h1>
            </div>
            {/* blogs card */}
            <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-2 lg:pb-28">
                {/* First row */}
                <div class="relative mx-auto max-w-[90%]">
                    
                    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Article</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                        <p class="mt-3 text-base text-gray-500">In the world of digital marketing and e-commerce, the term "conversion" holds a special place. It's the ultimate goal for businesses striving to succeed online. Conversion boost refers to the strategic efforts made by companies to increase their conversion rates.</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Roel Aufderehar</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Roel Aufderehar</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-03-16">Mar 16, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Video</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
                                        <p class="mt-3 text-base text-gray-500">SEO done right can positively impact your customer retention rates. You can use it to build authority, credibility and trust. These factors encourage increased sales, a crucial factor in business growth.</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Brenna Goyette</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Brenna Goyette</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-03-10">Mar 10, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>4 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Case Study</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
                                        <p class="mt-3 text-base text-gray-500">What is great customer service? Great customer service means following best practices like valuing customers' time, having a pleasant attitude, and providing knowledgeable and resourceful resources, but that you also take things a step further to exceed</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Daniela Metz</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Daniela Metz</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-02-12">Feb 12, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>11 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="relative mx-auto max-w-[90%]">
                    
                    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Article</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                        <p class="mt-3 text-base text-gray-500">In the world of digital marketing and e-commerce, the term "conversion" holds a special place. It's the ultimate goal for businesses striving to succeed online. Conversion boost refers to the strategic efforts made by companies to increase their conversion rates.</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Roel Aufderehar</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Roel Aufderehar</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-03-16">Mar 16, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Video</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
                                        <p class="mt-3 text-base text-gray-500">SEO done right can positively impact your customer retention rates. You can use it to build authority, credibility and trust. These factors encourage increased sales, a crucial factor in business growth.</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Brenna Goyette</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Brenna Goyette</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-03-10">Mar 10, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>4 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-indigo-600">
                                        <a href="#" class="hover:underline">Case Study</a>
                                    </p>
                                    <a href="#" class="mt-2 block">
                                        <p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
                                        <p class="mt-3 text-base text-gray-500">What is great customer service? Great customer service means following best practices like valuing customers' time, having a pleasant attitude, and providing knowledgeable and resourceful resources, but that you also take things a step further to exceed</p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#">
                                            <span class="sr-only">Daniela Metz</span>
                                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Daniela Metz</a>
                                        </p>
                                        <div class="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-02-12">Feb 12, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>11 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;