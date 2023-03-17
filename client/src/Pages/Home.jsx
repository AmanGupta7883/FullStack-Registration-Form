import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import {MdPersonAddAlt1} from "react-icons/md"

const Home = () => {
    const nav = useNavigate()

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="#">MySqlServer Project</a>
                </div>
            </nav>
            <div className="container p-3">
                <div className="btns d-flex gap-3 justify-content-center">
                    <button onClick={() => nav('/AddForm')} className='btn btn-primary fw-semibold'>New Entry <MdPersonAddAlt1 className='mx-2'/></button>
                </div>
                <ToastContainer position="top-center" />

            </div>
        </>
    )
}

export default Home