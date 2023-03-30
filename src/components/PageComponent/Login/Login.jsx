import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const Login = () => {
    const LoginData = [
        {
            name: "username",
            type: "text"
        },
        {
            name: "password",
            type: "password"
        },
        {
            name: "Conform password",
            type: "password"
        },

    ]
    return (
        <div>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ""
                    }}
                onSubmit={(val) => {
                    console.log(val);
                }}>
                <Form>
                    {LoginData.map((val, i) => {

                        return (
                            <div className='p-2'>
                                <label htmlFor={val.name} className="capitalize font-semibold">{val.name}</label>
                                <Field
                                    type={val.type}
                                    name={val.name}
                                    placeholder={`Enter ${val.name}`}
                                    className="w-full p-2 border-2" />
                                <ErrorMessage
                                    name={val.name}
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                        )
                    })}
                    <button type='submit' className='bg-blue-600 text-white px-4 rounded-md py-2'>LogIN</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
