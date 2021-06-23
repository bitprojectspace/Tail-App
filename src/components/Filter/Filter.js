import Search from '../Search/Search'
//Latest Work of Kyle and Hriday.
export default function Filter(){
    return (
        <section id="search" className="section section-search white-text center scrollspy bg-Gray border-b-2 border-pink-400 mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col s12 inline-flex w-40">
                            <div className="input-field w-7/12">
                                <input className="white grey-text autocomplete" placeholder="Search for job, contractor, etc" type="text" id="autocomplete-input" />
                            </div>
                            {
                                //div containing all the options
                            }
                            <div className="inline-flex items-center">
                            {
                                //Filter by urgency
                            }
                            <div className="mt-1 sm:mt-0 sm:col-span-2 px-5">
                                <select
                                id="urgency"
                                name="urgency"
                                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-DarkOrchid"
                                >
                                <option>Urgency Type</option>
                                <option>Urgent</option>
                                <option>Actively looking</option>
                                <option>Just Browsing</option>
                                </select>
                            </div>

                            {
                                //Filter by Category
                            }
                            <div className="mt-1 sm:mt-0 sm:col-span-2 px-5">
                                <select
                                id="urgency"
                                name="urgency"
                                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-DarkOrchid"
                                >
                                <option>Skill Type</option>
                                <option>Plumbing</option>
                                <option>Electrical</option>
                                <option>Mechanic</option>
                                </select>
                            </div>

                            {
                                //Filter by Date Posted
                            }
                            <div className="mt-1 sm:mt-0 sm:col-span-2 px-5">
                                <select
                                id="urgency"
                                name="urgency"
                                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md bg-DarkOrchid"
                                >
                                <option>Time Frame</option>
                                <option>last 24 Hours</option>
                                <option>Last 3 Days</option>
                                <option>This Week</option>
                                </select>
                            </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section> 
    )
}