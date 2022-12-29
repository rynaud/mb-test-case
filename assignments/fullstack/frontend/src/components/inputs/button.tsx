import { Button, ButtonProps } from '@mui/material'
import React from 'react'

function CustomButton({ children, ...props }: ButtonProps) {
  return (
    <Button variant='contained'  {...props}>{children}</Button>
  )
}

export default CustomButton