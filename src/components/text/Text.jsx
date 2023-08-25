import React from 'react'

function Text({title , description}) {
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content={currentSEO.keywords.join(", ")}
            />
        </div>
    )
}

export default Text