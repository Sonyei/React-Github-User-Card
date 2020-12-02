import React from 'react'

function GitCards(props) {

    return(
        <>
          <h1>{props.user.login}</h1>
            <img width={"60"} alt={"Profile Avatar"} src={props.user.avatar_url}/>
            <h2>Currently Following {props.user.login}</h2>
        </>
    )
}

export default GitCards