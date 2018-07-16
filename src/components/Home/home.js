import React from 'react'
import Navbar from '../NavBar/navbar'
import CCDenied from '../../containers/CCDenied/ccDenied'

export default () => {
  return (
      <div>
          <div class="row">
              <div class="col-sm-2">
                  <Navbar />
              </div>
              <div class="col-sm-10">
                  <CCDenied />
              </div>
          </div>
      </div>
  )
}
