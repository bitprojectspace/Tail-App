import Search from '../Search/Search'
export default function Filter(){
    return (
        <section id="search" className="section section-search blue accent-2 white-text center scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field">
                                <input className="white grey-text autocomplete" placeholder="Search for job, contractor, etc" type="text" id="autocomplete-input" />
                            </div> 
                        </div>
                    </div>
                </div>
            </section> 
    )
}