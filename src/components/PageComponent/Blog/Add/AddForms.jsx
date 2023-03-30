// import React from 'react'
// import axios from 'axios'
// import { ErrorMessage, Field, Form, Formik } from 'formik'
// import * as Yup from 'yup'
// const initialValues = {
//     title: "",
//     sub_title: "",
//     author_name: "",
//     date: "",
//     description: "",
//     image: ""
// }
// const onSubmit = (data) => {
//     console.log(data);
//     axios({
//         method: 'POST',
//         url: 'https://kalikablog.onrender.com/blog',
//         data: data
//     })
//         .then(function (res) {
//             console.log(res)
//             alert('Successfully signed up!');
//         })
//         .catch(function (res) {
//             console.log(res)
//         });
// }
// const validationSchema = Yup.object({
//     title: Yup.string().required("required")
// })
// const AddForms = () => {
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={onSubmit}
//                 validationSchema={validationSchema}
//             >
//                 <Form action="" className="border-2 border-blue-600 p-2 w-2/3 m-auto mt-7  ">
//                     <div className='flex flex-col mb-2'>
//                         <label htmlFor="title" className='text-xl'>Title</label>
//                         <Field
//                             type="text"
//                             placeholder="enter title"
//                             name="title"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="title" />
//                     </div>
//                     {/* sub_title */}
//                     <div className='mb-2'>
//                         <label htmlFor="sub_title">SubTitle</label>
//                         <Field
//                             type="text"
//                             placeholder="enter sub_title"
//                             name="sub_title"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="sub_title" />
//                     </div>
//                     {/* author_name */}
//                     <div className='flex flex-col mb-2'>
//                         <label htmlFor="author_name" className='text-xl'>Author Name</label>
//                         <Field
//                             type="text"
//                             placeholder="enter author_name"
//                             name="author_name"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="author_name" />
//                     </div>
//                     {/* date section */}
//                     <div className='flex flex-col mb-2'>
//                         <label htmlFor="title" className='text-xl'>Date</label>
//                         <Field
//                             type="date"
//                             placeholder="enter date"
//                             name="date"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="date" />
//                     </div>
//                     {/* Description */}
//                     <div className='flex flex-col mb-2'>
//                         <label htmlFor="description" className='text-xl'>Author Name</label>
//                         <Field
//                             as="textarea"
//                             placeholder="Enter description"
//                             name="description"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="description" />
//                     </div>
//                     {/* image section */}

//                     <div className='flex flex-col mb-2'>
//                         <label htmlFor="author_name" className='text-xl'>Upload Image</label>
//                         <Field
//                             type="file"
//                             placeholder="enter Image"
//                             name="image"
//                             className="border-2 p-2 w-full"
//                         />
//                         <ErrorMessage name="author_name" />
//                     </div>
//                     <button type="submit" className="bg-blue-700 p-2 w-full text-white">Submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }

// export default AddForms
// import axios from 'axios'
// import React, { useState } from 'react'
// // import ViewForm2 from '../View/ViewForm2'

// const AddForm = () => {
//     const [formDatas, setFormData] = useState(({
//         title: "",
//         sub_title: "",
//         author_name: "",
//         date: "",
//         description: "",
//         image: ""
//     }))
//     const [displayRecords, setdisplayRecords] = useState([])

//     const handleInput = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setFormData({ ...formDatas, [name]: value })
//     }
//     const handleImage = (event) => {
//         const name = event.target.name;
//         const value = event.target.files;
//         setFormData({ ...formDatas, [name]: value })
//     }
//     //
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newRec = { ...formDatas, id: new Date().getTime.toString() }
//         console.log(formDatas, "red")
//         setdisplayRecords([...displayRecords, newRec])
//         let formData = new FormData();
//         formData.append('title', formDatas.title);
//         formData.append('sub_title', formDatas.sub_title);
//         formData.append('author_name', formDatas.author_name);
//         formData.append('date', formDatas.date);
//         formData.append('description', formDatas.description);
//         formData.append('image', formDatas.image);

//         axios.post('https://kalikablog.onrender.com/blog', formData).then(res => {
//             console.log(res.data)
//         }).catch(err => {
//             console.log(err)
//         });

//         // clear data in form
//         setFormData({
//             title: "",
//             sub_title: "",
//             author_name: "",
//             date: "",
//             description: "",
//             image: ""
//         })

//     }
//     return (
//         <div className=''>
//             <form action="" className='border-2 flex flex-col w-200 text-xl border-blue-400' encType='multipart/form-data' onSubmit={handleSubmit}>
//                 <input type="text"
//                     autoComplete='off'
//                     placeholder='Enter Title'
//                     name='title'
//                     onChange={handleInput}
//                     value={formDatas.title}
//                     className='p-2 border-2 m-2' />

//                 <input type="text"
//                     placeholder='Enter sub_title'
//                     autoComplete='off'
//                     name='sub_title'
//                     onChange={handleInput}
//                     value={formDatas.sub_title}
//                     className='p-2 border-2 m-2' />

//                 <input type="text"
//                     placeholder='Enter author_name'
//                     autoComplete='off'
//                     name='author_name'
//                     onChange={handleInput}
//                     value={formDatas.author_name}
//                     className='p-2 border-2 m-2' />

//                 <input type="date"
//                     placeholder='Enter date'
//                     autoComplete='off'
//                     name='date'
//                     onChange={handleInput}
//                     value={formDatas.date}
//                     className='p-2 border-2 m-2' />

//                 <textarea
//                     type=""
//                     placeholder='Enter desc'
//                     name='description'
//                     onChange={handleInput}
//                     value={formDatas.description}
//                     autoComplete='off'
//                     className='p-2 border-2 m-2' />

//                 <input
//                     type='file'
//                     name='image'
//                     onChange={handleImage}
//                     className="p-2 border-2 m-2"
//                 />
//                 <button type='submit' className='bg-[#14327d] text-white m-2 p-2'>Submit</button>
//             </form>
//             <div>
//                 {

//                     displayRecords.map((curElement, i) => {
//                         console.log(curElement)
//                         return (
//                             <div className='border-2'>
//                                 {/* <p>{curElement.image}</p> */}
//                                 <h1>{curElement.title}</h1>
//                                 <h1>{curElement.date}</h1>
//                             </div>
//                         )
//                     })
//                 }

//                 {/* {displayRecords && <ViewForm2 displayRecords={displayRecords} />} */}
//                 {/* <Index /> */}
//             </div>
//         </div>
//     )
// }

// export default AddForms
import React, { useState, useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const ViewForm = () => {
    const [blogs, setBlogs] = useState([]);
    const [Index, setIndex] = useState(null);
    const [toggle, setToggle] = useState([])


    const TableHeader = [
        {
            name: "ID"
        },
        {
            name: "Title"
        },
        {
            name: "SubTitle"
        },
        {
            name: "Description"
        },
        {
            name: "Image"
        },
        {
            name: "Action"
        },
    ]
    const getData = () => {
        try {
            axios
                .get("https://kalikablog.onrender.com/blog")
                .then((res) => {
                    // console.log(res.data);
                    setBlogs(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        getData();
    }, []);
    const handleDelete = (_id) => {
        try {

            axios.delete(https://kalikablog.onrender.com/blog/${_id}).then(res => {
        if (res.status === 200) {
                setToggle(!toggle);
                toast.success("The data is deleted");
                console.log("Data Gone Boy!!")
            }
        });
    } catch (error) {
        console.log(error)
    }
};

const newCallBack = useCallback(() => {
    getData();
}, [])

const newData = useMemo(() => newCallBack(), [toggle]);

return (
    <div className="mt-12">

        <table className="w-full">
            {/* Table heading */}
            <tr>
                {
                    TableHeader.map((val, i) => {
                        return <th className="border-2" key={i}>{val.name}</th>
                    })
                }

            </tr>
            {blogs.map((val, i) => {
                return (
                    <tr key={i} className="border-2">
                        <td className="border-2">{i + 1}</td>
                        <td className="border-2">{val.title}</td>
                        <td className="border-2">{val.sub_title}</td>
                        <td>
                            <div
                                className={`${Index === i ? "" : "line-clamp-3"
                                    } text-justify`}
                                dangerouslySetInnerHTML={{ __html: val.description }}
                            />
                            <div
                                className={`text-blue-500 cursor-pointer`}
                                // ${i ? "hidden" : "block"}
                                onClick={() => {
                                    setIndex(i);
                                }}
                            >
                                View More
                            </div>
                            <div
                                className={`text-blue-500 rounded-lg p-2 cursor-pointer`}
                                // ${see === "no" ? "hidden" : "block"}
                                onClick={() => {
                                    setIndex(!i);
                                }}>
                                View Less
                            </div>
                        </td>
                        <td className="border-2 flex col-span-1">
                            {val.image.map((value, index) => {
                                return <div className="h-fit w-fit">
                                    <img key={index} src={value.path} alt="preview" className="" />
                                </div>
                            })}
                        </td>
                        <td className="border-2">
                            <div
                                className="cursor-pointer p-2 text-white rounded-md bg-[#00C9A7]"
                                onClick={() => {
                                    handleDelete(val._id);
                                }}
                            >
                                Delete
                            </div>
                        </td>
                    </tr>
                );
            })}
            <tr></tr>
        </table>
    </div>
);
};

export default ViewForm;