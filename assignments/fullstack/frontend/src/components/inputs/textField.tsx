import styled from '@emotion/styled';
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import React from 'react'

const Input = styled(TextField)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
})

function CustomTextField({ label, name, ...props }: TextFieldProps) {
    return (
        <Input name={name} data-testid={`${name}-testid`} label={label} variant="outlined" {...props} />
    )
}

export default CustomTextField