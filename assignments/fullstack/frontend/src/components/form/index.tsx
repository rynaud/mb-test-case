import React, { memo, useState } from 'react'
import { FormFunctionTypes, FormTypes } from './form';
import CustomTextField from '../inputs/textField';
import { Box, Switch } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../inputs/button';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    textField: {
        width: "30vw"
    }
}))

function Form({ socket, setData }: FormFunctionTypes) {
    const [user, setUser] = useState<FormTypes>({
        username: "",
        message: "",
        type: false,
    })

    const classes = useStyles();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
        setUser(prev => ({
            ...prev,
            [e.target.name]: e.target.checked,
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket.emit(user.type ? "chat" : "echo", user)
        setData((prev) => ([
            ...prev,
            user
        ]))
    }

    return (
        <form onSubmit={onSubmit}>
            <Box className={classes.root}>
                <CustomTextField className={classes.textField} name="username" onChange={onChange} label="Name" />
                <CustomTextField className={classes.textField} name="message" onChange={onChange} label="Message" />
                <Box>Echo Bot <Switch onChange={onChangeSwitch} name="type" /> Chat </Box>
                <CustomButton type='submit'  >
                    test
                </CustomButton>
            </Box>
        </form>
    )
}

export default memo(Form)