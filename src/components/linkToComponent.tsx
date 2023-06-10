import  Link,{ LinkProps} from 'next/link'
import React from 'react'


interface LinkProp extends LinkProps {
    children: string
}

export default function LinkToComponent( {...linkProps }:LinkProp) {
    return (

        <Link {...linkProps} className='btn btn-primary'>{}</Link>
    )
}