import React from "react";

const UserList = props => {
    return(
        <div className="card my-3 px-3 py-3">
            <h3>
                {props.data.name}
            </h3>
            {props.children}
        </div>
    )
}

export default UserList