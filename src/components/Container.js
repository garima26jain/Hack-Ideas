import React, { useState, useEffect } from 'react'
import Card from './Card'

const Container=({data})=> {
    console.log("data", data);

    return (
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
            {data.map((obj,i)=>{
            return <Card key={obj.id}
                        title = {obj.title} 
                        img={obj.image} 
                        desc ={obj.description}
                        tag={obj.tags}
                    />
            })}
        </div>
    )
}
export default Container