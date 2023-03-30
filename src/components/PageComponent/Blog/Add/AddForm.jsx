import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required*").max(10),
  sub_title: Yup.string().required("Required*"),
  author_name: Yup.string().required("Required*")

})
const AddForms = () => {
  const [newImg, setNewImg] = useState("")
  const [first, setFirst] = useState([]);
  const handleChange = (e) => {
    setNewImg([...newImg, e.target.files[0]])
    setFirst([...first, e.target.files[0]]);
  }
  const postData = (val) => {
    try {
      const formData = new FormData();
      formData.append("title", val.title);
      formData.append("sub_title", val.sub_title);
      formData.append("author_name", val.author_name);
      formData.append("date", val.date);
      formData.append("description", val.description);
      for (let i = 0; i < first.length; i++) {
        formData.append("image", first[i])
      }
      axios.post("https://kalikablog.onrender.com/blog", formData).then(res => {
        if (res.status === 200 || res.status == 201) {
          toast.success("Submitted successfully")
        }
        else {
          toast.error("Cannot posted!!")
        }
      }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.log(error);
    }
  }
  const FormFields = [
    {
      name: "title",
      type: "text"

    },
    {
      name: "sub_title",
      type: "text"
    },
    {
      name: "author_name",
      type: "text"
    },
    {
      name: "date",
      type: "date"
    },
    {
      name: "description",
      type: "text"
    },
  ]
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          sub_title: "",
          author_name: "",
          date: "",
          description: "",
          image: []
        }}
        onSubmit={(val) => {
          postData(val);

        }}
        validationSchema={validationSchema}
      >
        <Form className=" p-2 w-200 m-auto">
          <div className='flex flex-col'>
            {FormFields.map((val, i) => {
              return (
                <div key={i} className="pb-2">
                  <label htmlFor={val.name} className="capitalize font-semibold">{val.name}</label>
                  <Field
                    type={val.type}
                    name={val.name}
                    placeholder={`Enter ${val.name}`}
                    className="w-full p-2 border-2"
                  />
                  <ErrorMessage
                    name={val.name}
                    component='div'
                    className='text-red-500'
                  />
                </div>
              )
            })}
          </div>
          {/* image section */}
          <div className="imagesec flex flex-col">
            <label htmlFor="image" className='font-semibold'>Upload Image
            </label>
            <p className='flex scroll gap-2 overflow-x-scroll'>
              {newImg && newImg.map((val, i) => {
                return <img key={i} src={URL.createObjectURL(val)} className="inline w-40" alt='imagee' />
              })}
            </p>
            <input type="file" name="image" id="" onChange={handleChange} className="py-2" />
          </div>
          {/* Submit button */}
          <ToastContainer />
          <button type="submit" className="bg-blue-700 p-2 w-full text-white">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddForms
