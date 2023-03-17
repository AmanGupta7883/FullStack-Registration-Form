import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaUserAlt, FaLocationArrow} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'


const initialState = {
    name: "",
    adress: "",
    phone: ""
}
const AddFrom = () => {

    const [state, setState] = useState(initialState);

    const { name, adress, phone } = state;


    const onHandler = (e) => {
        // setState(e.target.value)
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }


    const addRecord = (e) => {

        e.preventDefault();
        if (!name || !adress || !phone) {
            console.log("dededwefwe")
        } else {
            axios.post("http://localhost:3000/addRecords", { name, adress, phone }).then(() => {
                setState({ name: "", adress: "", phone: "" })
            })

        }
        toast.success("Record added sucessfully")
        setTimeout(() => {
            navi('/')
        }, 100);

    }


    const navi = useNavigate()
    return (
        <>
            <form onSubmit={addRecord} className='w-50 container flex-column' style={{ "display": "flex", "minHeight": "80vh", "justifyContent": "center", "alignItems": "center" }}>
                <div class="input-group mb-3">
                    <span class="input-group-text fw-semibold" id="basic-addon1"><FaUserAlt className='mx-2'/>Name</span>
                    <input required type="text" value={name} onChange={onHandler} class="form-control" name='name' placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text fw-semibold" id="basic-addon1"><FaLocationArrow className='mx-2'/>Adress</span>
                    <input required type="text" value={adress} onChange={onHandler} class="form-control" name='adress' placeholder="Adress" aria-label="Adress" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text fw-semibold" id="basic-addon1"><BsFillTelephoneFill className='mx-2'/>Phone</span>
                    <input required type="text" value={phone} onChange={onHandler} class="form-control" name='phone' placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="btns d-flex gap-3 justify-content-between">
                    <button className='btn btn-dark' onClick={() => navi(-1)} >Go back</button>
                    {/* <button ></button> */}
                    <button type="submit" className='btn btn-success'>Save</button>
                </div>
            </form>
        </>
    )
}

export default AddFrom