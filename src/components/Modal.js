import React, { useState } from 'react'
import { data, tags } from '../dummydata'

const Modal =({handleClose, dataView})=> {

    const [inputs, setInputs]=useState('');

    const closeModal = () => {
        handleClose()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = () =>{
        console.log("feed into localstorage");
        const hacklist = JSON.parse(localStorage.getItem('hacks')) ?? data
        console.log("hacklist",hacklist);
        localStorage.setItem("hacks",JSON.stringify([...hacklist,{...inputs}]))
        closeModal()
        dataView()
    }

    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-96">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-xl font-semibold">
                    Add New Hackathon
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form>
                        <label htmlFor="title" className="block text-gray-500 font-medium mb-2">Title</label>
                            <input type="text" 
                                name="title" 
                                value={inputs.title||""}
                                placeholder="Enter Your Title"
                                onChange={handleChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />

                        <label htmlFor="description" className="block text-gray-500 font-medium m-2">Description</label>
                            <textarea name="description"
                                value={inputs.description||""}
                                placeholder="Description here"
                                onChange= {handleChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>

                        <label className="text-gray-500 font-medium m-2" htmlFor="Tag">Tag</label>
                        <select id="Tag" 
                            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
                            name="tag"
                            value={inputs.tag||""}
                            onChange={handleChange}
                        >
                            <option value="">
                                Select an option
                            </option>
                            {
                                tags.length> 0 && tags.map((tag,i)=>{
                                    return <option key={i} value={tag}>
                                        {tag}
                                    </option>
                                })
                            }
                        </select>
                        
                        <label htmlFor="title" className="block text-gray-500 font-medium m-2">Image URL</label>
                            <input type="text" 
                                name="imageURL" 
                                value={inputs.imageURL||""}
                                placeholder="Enter Your Image URL"
                                onChange={handleChange}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            />
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal
