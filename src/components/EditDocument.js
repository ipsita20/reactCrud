import React, { useState, useEffect } from 'react'

const EditDocument = props => {
  const [document, setDocument] = useState(props.currentDocument)
  useEffect(
    () => {
      setDocument(props.currentDocument)
    },
    [ props ]
  )

  const handleInputChange = event => {
		const { name, value } = event.target

		setDocument({ ...document, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!document.docTitle || !document.description || !document.publisher) return

      props.updateDocument(document.id, document)
    }}>
      <input type="text" name="docTitle" placeholder="Enter Title" value={document.docTitle} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Enter Description" value={document.description} onChange={handleInputChange} />
      <input type="text" name="publisher" placeholder="Enter Publisher" value={document.publisher} onChange={handleInputChange}/>
      <button  className="btn btn-primary">Edit Document</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info">
        Cancel
      </button>
    </form>
  )
}

export default EditDocument