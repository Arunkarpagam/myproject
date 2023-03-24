import React from "react";
import './register.css';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    Username: yup.string().required('*please enter your Username'),
    Password: yup.string().required('*please enter your Password'),
    MailId: yup.string().required('*please enter your MailId'),
    MoblieNumber: yup.string().required('*please enter your MoblieNumber'),

})
function Register() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return (
        
        <>
            <section>
                <div className="register">
                    <div className="one">
                        <h2>RESGISTRATION</h2>
                        <form onSubmit={handleSubmit((data) => (console.log(data)))} id="form" className="flex flex-col">
                            <input {...register('Username')} type="text" placeholder="Username" />
                            <p id=" one">{errors.Username?.message}</p>
                            <input {...register('Password')} type="text" placeholder="Password" />
                            <p id=" one">{errors.Password?.message}</p>
                            <input {...register('MailId')} type="text" placeholder="MailId" />
                            <p id=" one">{errors.MailId?.message}</p>
                            <input {...register('MoblieNumber')} type="text" placeholder="Moblie Number" />
                            <p id="one">{errors.MoblieNumber?.message}</p>
                            <button type="submit" disabled={isDirty && !isValid} >Sign In</button>
                        </form>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Register