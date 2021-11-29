import React, { useState } from 'react';
import './App.css';
import DocumentList from './components/DocumentList'
import  AddDocument from './components/AddDocument';
import  EditDocument from './components/EditDocument';

const App= () => {
  const documentData = [
    { id: 1, docTitle: 'document1', description: 'desc1', publisher: 'publisher1' },
    { id: 2, docTitle: 'document2', description: 'desc2', publisher: 'publisher2'},
    { id: 3, docTitle: 'document3', description: 'desc3', publisher: 'publisher3' },
  ]

  const initialFormState = { id: null, docTitle: '', description: '', publisher: '' }

  const [documents, setDocuments] = useState(documentData)
  const [editing, setEditing] = useState(false);
  const [currentDocument, setCurrentDocument] = useState(initialFormState)


  // Add Document...
  const addDocument = document => {
    document.id = documents.length + 1
    setDocuments([...documents, document])
  }
  // delete documents...
  const deleteDocument = id => {
    setDocuments(documents.filter(document => document.id !== id))
  }
  // set value for edit document form...
  const editDocument = document => {
    setEditing(true)
    setCurrentDocument({ 
      id: document.id, 
      docTitle: document.docTitle, 
      description: document.description, 
      publisher : document.publisher 
    })
  }
  //  update document
  const updateDocument = (id, updatedDocument) => {
    setEditing(false)
    console.log(id,'iddddd')
    setDocuments(documents.map(item => (item.id === id ? updatedDocument : item)))
  }

  return (
    <div className="container">
      <h2 className="text-center">React.js CRUD App using Hooks</h2>
      <div className="row">
      {editing ? (
        <div>
          <h2 className="text-center">Edit Document</h2>
          <div className="col-md-8 col-md-offset-2">
          <EditDocument
            editing={editing}
            setEditing={setEditing}
            currentDocument={currentDocument}
            updateDocument={updateDocument}
          />
          </div>
        </div>
      ) : (
        <div>
        <h3 className="text-center">Add Document</h3>
        <div className="col-md-8 col-md-offset-2">
          <AddDocument addDocument={addDocument} />
        </div>
        </div>
      )}
        
        


      </div>
      <div className="row">
        <h3 className="text-center">Document List</h3>
        <div className="col-md-6 col-md-offset-3">
          <DocumentList documents={documents} editDocument={editDocument}  deleteDocument={deleteDocument}/>
        </div>
      </div>
    </div>
  );
}

export default App;
