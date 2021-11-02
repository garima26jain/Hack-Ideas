import React, { useState } from 'react'

const Card=({ title, desc, img, tag})=> {

    const [count, setCount] = useState(0)
    const [like, setLike] =  useState(false)

    const handleClick = () => {
        setCount(count => count+1)
        setLike(true)
    }

    return (
        
        <div class=" border-2 cursor-pointer rounded m-2 h-56 hover:shadow-2xl">
            
                <img src={img} alt="display img" className="object-fill w-full h-32"/>
                <div className="px-4">
                <h3 className="leading-6 font-medium mr-5">{title}</h3>
                
                <p className="">{desc}</p>
                <div className="flex justify-between">
                
                    {like?
                    <button className="relative" >
                    {count >0 &&
                        <span class="w-4 h-4 rounded-full absolute leading text-xs bg-blue-300 ">
                            {count}
                        </span>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    </button>
                    :
                    <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h- w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    </button>
                    }
                <span class="px-4 py-1 m-2 my-1  text-base rounded-full text-green-600  bg-green-200 ">
                    {tag}
                </span>
                </div>
                </div>
            
        </div>
        
    )
}

export default Card
