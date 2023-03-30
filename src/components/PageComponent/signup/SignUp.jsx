import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const SignUP = () => {
    const LoginData = [
        {
            name: "email",
            type: "email"
        },
        {
            name: "password",
            type: "password"
        },
        {
            name: "confrom password",
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
                    <p className='pb-4 text-xl font-bold'>SignUP Form</p>
                    {LoginData.map((val, i) => {
                        return (
                            <div className='pb-2'>
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
                    <button type='submit' className='bg-blue-600 text-white px-4 rounded-md py-2'>Sign Up</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUP
