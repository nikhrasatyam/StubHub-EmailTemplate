import React from 'react'

export default (props) => {
  return (
      <div>
          <h2 className="add-todo">Preview</h2>
          <div className="preview-text">
              {
                  props.template.split('\n').map((item, key) => {
                      return <span key={key}>{item}<br /></span>
                  })
              }
          </div>
      </div>
  )
}
