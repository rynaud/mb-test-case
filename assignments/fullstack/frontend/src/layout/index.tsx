import React from 'react'
import { LayoutProps } from './layout'

function Layout({ children }: LayoutProps) {
    return (
        <div>{children}</div>
    )
}

export default Layout