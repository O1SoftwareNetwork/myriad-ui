import React from 'react';

function VenueCard() {
  return (
    // Venue picture
    // Basic info
    // - Name
    // - City-State
    // - Genre

    <div>
        <div className='icon'>
            <img></img>
        </div>
        <div className='venue-name'>
            <center>
                <h1>
                    <b>
                        Name
                    </b>
                </h1>
            </center>
        </div>
        <div className='venue-state'>
            <center>
                <h1>
                    <b>City State</b>
                </h1>
            </center>
        </div>
        <div className='venue-genre'>
            <center>
                <h1>
                    <b>Genre</b>
                </h1>
            </center>
        </div>
    </div>
  )
}

export default VenueCard