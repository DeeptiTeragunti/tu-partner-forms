import React from 'react'

function Mobile() {
    return (
        <div className="container">
            <p>hi</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png" alt = "lgo" className="logo"></img>
            <h2>Mobile Number</h2>
           
            <p>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            </p>
            <p>
              
            </p>
            <Button variant="contained" color="primary" href="#contained-buttons">
                  Next
                </Button>

      <div className ="condition">
        By using our services, you are agree with our
        <p>terms and conditions</p>
        </div>
        </div>
    )
}

export default Mobile
