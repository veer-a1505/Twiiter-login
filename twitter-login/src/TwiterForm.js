import React from 'react'

const TwitterForm = () => {
    return(
        <div>
          <form>
              <label>
                  <input placeholder="Phone, email, or username" type="text"></input>
                  <br></br>    
                  <br></br>    
                   <input  placeholder="Password" type="password"></input>
              </label>
          </form>  
        </div>
    )
}

export default TwitterForm;