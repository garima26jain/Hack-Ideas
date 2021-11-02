import React, { useState } from 'react'
import Modal from './Modal';

const Header = ({setView}) => {

    const[modalActive, setModalActive] = useState(false)
    const[sortField, setSortField] = useState('')

    const addNewHack = () => {
        setModalActive(true)
    }

    const closeModal = () =>{
        setModalActive(false)
    }

    const handleChange = (e) => {
        setSortField(e.target.value)
    }

    const dataView = () => {
        setView()
    }

    return (
        <>
        <div className="m-6 flex justify-between">
            <h1 className=" text-3xl  text-black">Hack Ideas</h1>
            <div className="flex mx-2">
                
            <select id="sort" 
                            class="block py-2 mx-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
                            name="sort"
                            value={sortField}
                            onChange={handleChange}
                        >
                            <option value="">
                                Sort by 
                            </option>
                            <option value="Likes">
                                Likes
                            </option>
                            <option value="Date">
                                Date 
                            </option>

                        </select>

            <button className="border border-gray-300 ml-3 rounded-md px-5 py-2 hover:bg-blue-400 " onClick={addNewHack}>+ Add</button>
            </div>
        </div> 
        {
            modalActive && <Modal handleClose = {closeModal} dataView={dataView}/>
        }
        </>
    )
}

export default Header
