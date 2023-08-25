import React from 'react'

function description({title , description , classtitle , classdesc}) {
    return (
        <div>
            <div className={classtitle}>
                {title}
            </div>

            <div className={classdesc}>
                {description}
            </div>
        </div>
    )
}

export default description