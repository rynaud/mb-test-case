import React from 'react'
import { ChatboxTypes } from './chatbox'
import { Socket } from 'socket.io-client'
import { Avatar, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'
import { deepOrange } from '@mui/material/colors'

const useStyles = makeStyles(() => ({
    root: {
        height: `90vh`,
        overflow: "auto"
    },
    messageRoot: {
        border: "1px solid grey",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10

    },
    message: {
        minWidth: `82vw`,
        backgroundColor: "#FFF",
    },
    user: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFF",
        padding: 5,
        paddingRight: 20,
        minWidth: `10vw`,
        borderRight: "1px solid grey"
    },
    avatar: {
        backgroundColor: deepOrange[500],
        marginRight: 20,
    }
}))

function ChatBox({ data }: ChatboxTypes) {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            {data.map((value, index) => {
                return (
                    <Box className={classes.messageRoot} key={index}>
                        <Box className={classes.user}>
                            <Avatar className={classes.avatar}>{value.username.charAt(0)}</Avatar>
                            {value.username}
                        </Box>
                        <Box className={classes.message}>
                            {value.message}
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}

export default ChatBox