import React, { useState } from 'react'
import { FormTypes } from './form';
import CustomTextField from '../inputs/textField';

function Form() {
    const [data, setData] = useState<FormTypes>({
        username: "",
        message: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={onSubmit}>
            <CustomTextField name="username" onChange={onChange} label="Name" />
            <CustomTextField name="message" onChange={onChange} label="Message" />
        </form>
    )
}

export default Form