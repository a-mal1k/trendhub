import React from 'react'

function Fallback() {
    return (
        <div id="spinner">
        <div className="spinner-border text-success"animation="border" role="status">
        <span>Loading...</span>
      </div>
      </div>
    )
}

export default Fallback
