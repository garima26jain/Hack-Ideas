import React, { useState } from 'react'
import { data, tags } from '../dummydata'

const Modal =({handleClose, dataView})=> {

    const [inputs, setInputs]=useState('');
    const [hacks, setHacks] = useState(data)

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
        setHacks([...hacks,{...inputs}])
        localStorage.setItem("hacks",JSON.stringify([...hacks,{...inputs}]))
        closeModal()
        dataView()
    }

    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-xl font-semibold">
                    Add New Hackathon
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-black">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form>
                        <label for="title" class="block text-gray-500 font-medium mb-2">Title</label>
                            <input type="text" 
                                name="title" 
                                value={inputs.title||""}
                                placeholder="Enter Your Title"
                                onChange={handleChange}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />

                        <label for="description" class="block text-gray-500 font-medium m-2">Description</label>
                            <textarea name="desc"
                                value={inputs.desc||""}
                                placeholder="Description here"
                                onChange= {handleChange}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>

                        <label class="text-gray-500 font-medium m-2" for="Tag">Tag</label>
                        <select id="Tag" 
                            class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
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
                        
                        <label for="title" class="block text-gray-500 font-medium m-2">Image URL</label>
                            <input type="text" 
                                name="image" 
                                value={inputs.image||""}
                                placeholder="Enter Your Image URL"
                                onChange={handleChange}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            />
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
