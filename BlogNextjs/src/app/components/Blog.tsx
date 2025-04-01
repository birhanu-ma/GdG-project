
import Link from 'next/link'
import { data } from '../data'
import moment from 'moment'
export default function Blog(){
    return(
      
        <div className='flex justify-center'>
              <div className='w-300 blogList flex-col '>
            {data.map((blog)=>(
                <Link key={blog._id} href={`../blog/${blog._id}`}>
                    <div className='flex flex-row mb-5'>
                       <img className='w-15 h-15 mr-7 rounded-full' src={blog.author?.image} alt="" />
                       <div>
                           <h2 className='font-bold'>{blog.author?.name}</h2>
                           <p className='text-gray-600' >{blog.author?.email}</p>
                       </div>
                       <p className='text-gray-400'>{moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    
                    </div>

                    <div className='flex flex-col'>

                        <div className='flex h-30 justify-between'>
                            <div>
                                <h1 className='mb-2 font-bold' >{blog.title}</h1>
                                <p className='text-gray-600'>{blog.description}</p>
                            </div>
                            <div>
                                <img className='w-100  h-30' src={blog.image}/>
                            </div>
                        </div>
                        <div className='flex flex-row ml-5'>
                          {blog.tags.map((tag,ind)=>(
                                <p className = 'flex items-center mt-5 w-30 item-center ml-2 bg-gray-200 rounded'key={ind}>{tag}</p>
                            ))}
    
                        </div>
                        <hr className='mt-5 mb-5'/>    
                    </div>
                </Link>           
            ))
           
        }
        </div>

        </div>
    


    )
}