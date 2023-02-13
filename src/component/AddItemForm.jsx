import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import createItemSvg from '../asset/create_item.svg';
import validator from 'validator'
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddItemForm() {
    const [linkErrorMessage, setLinkErrorMessage] = useState('')
    const [ImageUrlErrorMessage2, setImageUrlErrorMessage2] = useState('')
    const [noTitleError, setTitleError] = useState(false)
    const [noCategoryError, setcategoryError] = useState(false)

    const validateLink = (value) => {

        if (validator.isURL(value)) {
            setLinkErrorMessage('')
        } else {
            setLinkErrorMessage('Invalid Link');
        }
    }

    const validateImgUrl = (value) => {

        if (validator.isURL(value)) {
            setImageUrlErrorMessage2('')
        } else {
            setImageUrlErrorMessage2('Invalid Image Url');
        }

    }

    const checkTitleError = (value) => {
        if (value === "") {
            setTitleError(false)
        }
        else {
            setTitleError(true)
        }
    }

    const checkCategoryError = (value) => {
        if (value === "") {
            setcategoryError(false)
        }
        else {
            setcategoryError(true)
        }
    }

    const notify = () => {
        if (noTitleError && noCategoryError) toast.success("Added Successfully! 🙌", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        else toast.error("Failed to add! ⚠️", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    return (
        <div className="createItem">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6 py-1">
                        <Link to="/home" id="backTomHome">
                            <i class="fa fa-chevron-left mx-2"></i> User
                        </Link>

                        <h3 className="text-center pt-5">Item Details</h3>

                        <form>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="validationCustom01" class="form-label">ITEM TITLE</label>
                                    <input type="text" class="form-control" id="validationCustom01" placeholder="" onChange={(e) => checkTitleError(e.target.value)} required></input>
                                </div>
                            </div>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="validationDefault02" class="form-label">LINK</label>
                                    <input type="text" class="form-control" id="link" placeholder="" onChange={(e) => validateLink(e.target.value)} required></input>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}>{linkErrorMessage}</span>
                                </div>
                            </div>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="imageUrl">IMAGE URL</label>
                                    <input type="text" class="form-control" id="imageUrl" placeholder="" onChange={(e) => validateImgUrl(e.target.value)} required></input>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        fontSize: '12px'
                                    }}>{ImageUrlErrorMessage2}</span>
                                </div>
                            </div>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="tagName">TAG NAME</label>
                                    <select class="form-control" id="tagName" required>
                                        <option value="option 1">User</option>
                                        <option value="option 2">Request</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="category">CATEGORY</label>
                                    <input type="text" class="form-control" id="category" placeholder="" onChange={(e) => checkCategoryError(e.target.value)} required></input>
                                </div>
                            </div>
                            <div className="form-row py-3 pt-4">
                                <div className="offset-1 col-lg-10">
                                    <label for="description">DESCRIPTION</label>
                                    <textarea class="form-control" id="description" />
                                </div>

                            </div>
                            <div className="form-row py-3 pt-4 text-center">
                                <div className="offset-1 col-lg-10">
                                    <button onClick={notify} type="submit" className="btn btn-primary btn-sm" id="createBtn">CREATE</button>
                                </div>
                                <ToastContainer />
                            </div>
                        </form>


                    </div>
                    <div className="col-lg-6 pb-5">
                        <img src={createItemSvg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItemForm