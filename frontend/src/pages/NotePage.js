import React from 'react'

const NotePage = ({match}) => {

    const noteID = match.params.id;
    

    return (
        <div>
            <h1>Single Note{noteID}</h1>
        </div>
    )
}

export default NotePage
