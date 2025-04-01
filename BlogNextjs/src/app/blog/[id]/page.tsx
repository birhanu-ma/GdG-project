
'use client'
import { data } from "@/app/data";
export default function Description({params}:{params:{id:string}}){
    
    const blog = data.find((item)=>item._id===params.id);

    if (!blog) return(<p>blog not found</p>)
    
    
    return(
        <>
        <section className="navigation-bar">
            <div className="container flex justify-between flex-row mt-5 mb-5">
                <div className="middle-nav ml-100">
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

                <div className="left-nav flex mr-3">
                    <button>loggin</button>
                    <button className=" w-20 bg-blue-500 ml-5 rounded">Donate</button>
                </div>
    
            </div>
        </section>
    
        <section className=" banner flex items-center flex-col">
            <div className="flex justify-center items-center flex-col">
                <h1 className="mt-5 mb-5">{blog.title}</h1>

                <div className="mb-5">
                    <img className="w-250 h-80" src={blog.image} alt={blog.title} />
                </div> 

            </div>
           
        </section>
        <section>
            <div className="flex flex-col items-center m-10">
                <img className="w-15 h-15 rounded-full" src={blog.author?.image} alt="" />
                <span className="text-gray-400 text-center">
                    <p>{blog.author?.name}</p>
                    <p>{blog.author?.email}</p>
                </span>

            </div>


        </section>

        <section className=" blog flex justify-center">
            <div className="w-240">
            <p>{blog.description}</p>
            </div>
        </section>


        <section className="related-blog mt-20 flex justify-center h-100">
            <>
            <div className="w-250">
            <h1 className="mt-2 mb-5">Related Blogs</h1> 
            <div className="flex flex-row justify-between" >

                <div className="p-5 shadow-2xl border rounded w-80">
                    <img src={blog.image} alt="" />
                    <h1 >{blog.title.slice(0,37)}</h1>
                    <div>
                    <div className=" pl-5 flex flex-row">
                        {blog.tags.map((tag)=>(
                            <p  className="p-2 bg-gray-100 ml-2 rounded">{tag}</p>
                        )
                    )}

                    </div>
                   
                    </div>
                </div>
                <div className=" p-5 shadow-2xl border rounded w-80">
                    <img src={blog.image} alt="" />
                    <h1 >{blog.title.slice(0,37)}</h1>
                    <div className="flex flex-row">
                        {blog.tags.map((tag)=>(
                            <p className="p-2 bg-gray-100 ml-2 rounded">{tag}</p>
                        )
                    )}
                   
                    </div>
    
                </div>
                <div className=" p-5 shadow-2xl border rounded w-80">
                    <img src={blog.image} alt="" />
                    <h1 >{blog.title.slice(0,37)}</h1>
                    <div className="flex flex-row">
                   
                        {blog.tags.map((tag)=>(
                            <p className="p-2 bg-gray-100 ml-2 rounded">{tag}</p>
                        )
                    )}

                   
                    </div>
                </div>
            </div>
            <hr className="mt-5"/>
           
            </div>
        
            </>
        
        </section>
        </>
    )
}