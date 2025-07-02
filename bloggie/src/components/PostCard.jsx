import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    // console.log(featuredImage);
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100  rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                 {/* {console.log(appwriteService.getFilePreview(featuredImage))} */}
               <img
                    src={appwriteService.getFileView(featuredImage)}
                    alt={title}
                    className="rounded-xl w-full h-40 object-cover"
                  />

            </div>
            <h2
            className='text-xl font-bold '
            >{title}</h2>
        </div>
    </Link>
  )
}




export default PostCard