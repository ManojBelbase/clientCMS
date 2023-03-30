import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import PropagateLoader from "react-spinners/PropagateLoader";

const ViewForm = () => {
  const [Index, setIndex] = useState("hello")
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [toggle, setToggle] = useState([])
  const [show, setShow] = useState(true)

  // fetching data
  const getData = () => {
    try {
      axios.get("https:/kalikablog.onrender.com/blog").then(res => {
        console.log(res.data);
        setBlogs(res.data.data)
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
  // Loader usestate
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [])
  // getdata
  useEffect(() => {
    getData();
  }, [])
  // Handle Delete
  const handleDelete = (_id) => {
    axios.delete(`https://kalikablog.onrender.com/blog/${_id}`).then(res => {
      if (res.status === 200) {
        setToggle(!toggle)
        toast.success('The data is deleted');
        console.log("Data Gone Boy!!")
      }
    })

  }
  return (
    <div>
      {/* Loader run */}
      {
        loading ?
          <PropagateLoader
            color={'#14327d'}
            loading={loading}
            size={20}
            className='text-center justify-center mt-32'
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <div>
            {/* table display */}
            {/* {
              blogs && <div>
                {
                  blogs.map((val, i) => {
                    console.log(val)
                    return <div key={i}>{val.name} </div>
                  })
                }
              </div>
            } */}
            <table className='w-full text-center'>
              <thead className='bg-blue-200'>
                <tr className='capitalize text-center align-middle'>
                  <th className=''>s.N</th>
                  <th className=''>Title</th>
                  <th>Subtitle</th>
                  <th>Author_name</th>
                  <th className='w-24'>Date</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='border-2 border-green-600 p-2'>
                {blogs.map((val, i) => {
                  return <tr key={i} className={` text-left ${i % 2 === 0 ? 'bg-green-100' : ''}`}>
                    <td>{i + 1}</td>
                    <td>{val.title}</td>
                    <td>{val.sub_title}</td>
                    <td>{val.author_name}</td>
                    <td>{val.date}</td>
                    {/* Description view lessa and more */}
                    <td className='text-center p-2'>
                      <div
                        className={`${Index === i ? "" : "line-clamp-2"
                          } `}
                        dangerouslySetInnerHTML={{ __html: val.description }}
                      />
                      <div
                        className={`text-blue-500 cursor-pointer bg-`}
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

                    {/* image section */}
                    <td className=''>
                      <div className='overflow-scroll scroll w-32 mx-auto flex flex-row'>
                        {val.image.map((value, index) => {
                          return (
                            <img key={index}
                              src={value.path}
                              alt="preview"
                              className='w-32 h-32'
                            />
                          )
                        })}
                      </div>
                    </td>
                    <td>
                      <div className='cursor-pointer bg-red-600 text-white p-2 rounded-md m-1 hover:bg-red-800' onClick={() => {
                        handleDelete(val._id);
                      }}>Delete
                      </div>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div >
      }
    </div>
  )
}
export default ViewForm