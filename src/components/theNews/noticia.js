import React from 'react'

const Noticia = (props) => {
    return (     
        <div className="infiniteNew">

            <div style={{fontWeight: "bold"}} >{props.title}</div>
            <br></br>
            <div className="content" dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>
    )
}
export default Noticia