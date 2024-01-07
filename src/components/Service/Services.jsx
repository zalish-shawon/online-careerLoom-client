/* eslint-disable react/no-unknown-property */

const Services = () => {
    return (
        <div>

            <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
               <div className="flex justify-center">
               <div>
               <h2 class="mb-1 text-5xl font-extrabold leading-tight text-gray-900">Services</h2>
                <p class="mb-12 text-xl text-gray-500">Here is a few of the awesome Services we provide.</p>
               </div>
               </div>
                <div class="w-full">
                    <div class="flex flex-col w-full mb-10 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                                        decentralized network that combines a smart contract and a frontend user interface.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                                        focus on understanding and analyzing data to provide a semantic web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full mb-5 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                                        to assess the extent up to which project management standards are being upheld.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                                        defenses and exploiting weaknesses in a computer system or network.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                        that eliminate a large amount of manual work and accelerate the development process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why choose us */}

            <div class="text-center p-8">
    <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why to choose US?
    </h2>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://img.freepik.com/free-photo/young-business-typing-netbook-keyboard-listening-music_8353-5973.jpg?w=740&t=st=1704623861~exp=1704624461~hmac=c526fddd03a8ba1fe8c92b2ff2108089872f3d95d4e0ec3d8c27ca213eab9c71" alt="gem" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple integration
            </h3>
            <p class="sm:text-lg mt-6">
                Use the LocaleData gem to download translations directly into your Ruby on Rails
                projects using the provided command line interface. Just create a project and follow
                the step-by-step instructions.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://img.freepik.com/free-photo/creative-copywriting-commercial-text-seo-editing_107791-15687.jpg?w=900&t=st=1704623905~exp=1704624505~hmac=b72e3fbac939eb3f8569c665da4d226a8e4e1527c276c87e247bc8fc4d61db43" alt="project members" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Easy collaboration
            </h3>
            <p class="sm:text-lg mt-6">
                All LocaleData projects are private. Each project can have multiple collaborators
                with different roles and access permissions. You determine who can see and edit
                your translations. Just add admins, developers, translators and configure their
                access rights.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left  text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://img.freepik.com/free-photo/business-contemporary-company-strategy-firm-concept_53876-31626.jpg?w=740&t=st=1704623952~exp=1704624552~hmac=97a7cddf2d8597d3e7692fd59196257389be5e4e7188004260c85f74b0f310bb" alt="editor" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                No more syntax errors
            </h3>
            <p class="sm:text-lg mt-6">
                LocaleData provides you easy import/export functions for your YAML files.
                Use a simple editor with many predefined languages to manage your locales.
                LocaleData also supports multiple translation types, such as simple text, plural forms,
                numbers, booleans, symbols, arrays, ...
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://img.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg?t=st=1704623854~exp=1704624454~hmac=8f6d276fbeb1b5c4868645721a1c36b178989185bd0b6162997f0f3e27c9cf79" alt="bulk editing" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Bulk editing
            </h3>
            <p class="sm:text-lg mt-6">
                Do you need to change the path of many translation keys at once? No problem, just
                use the bulk editing feature and enjoy the results.
            </p>
        </div>
    </div>

</div>

        </div>
    );
};

export default Services;