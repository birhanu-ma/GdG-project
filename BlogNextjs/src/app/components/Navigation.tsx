export function Navigation(){
    return(
        <div className="container">

    
        <div className="flex justify-between bg-gray mb-2 mt-2">
 
           
            <div className="ml-100">
                <ul className="flex flex-row">
                    <li  className="px-2">
                        home

                    </li>
                    <li  className=" px-2">
                        teams
                        
                    </li>
                    <li  className=" px-2">
                        success story
                        
                    </li>
                    <li  className=" px-2">
                        about us
                    
                    </li>
                    <li  className=" px-2">
                        blog
                    </li>
                    <li  className="px-2">
                        getInvolved
                    </li>


                </ul>

            </div>
            <div className="flex mr-3">
                <button>loggin</button>
                <button className=" w-20 bg-blue-500 ml-5 rounded">Donate</button>
            </div>

        </div>
        <div className="flex justify-between bg-gray my-10 ml-10">
            <div>
                <h4>Blogs</h4>
            </div>
            <div className="flex flex-row mr-100">
                <input type="text"
                placeholder="search for..." 
                className="w-100 text-gray-700 bg-white border border-gray-300 rounded shadow"/>
                <button className="bg-blue-500 w-20 ml-3 rounded">New Blog</button>
            </div>


        </div>

        </div>
        
    )
}