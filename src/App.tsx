import React from 'react';
import {DocumentEditorContainerComponent, Toolbar, Inject} from '@syncfusion/ej2-react-documenteditor';
import './App.css';

function App() {
  let editorObj: DocumentEditorContainerComponent | null;
  const onBtnClick=()=>{
    editorObj?.documentEditor.editor.insertComment("Need more clarification on this sentence");
  }
  const nextComment=()=>{
    editorObj?.documentEditor.selection.navigateNextComment();
  }
  const prevComment=()=>{
    editorObj?.documentEditor.selection.navigatePreviousComment();
  }
  const protection=()=>{
    editorObj?.documentEditor.editor.enforceProtection("123","CommentsOnly")
  }
  const removeProtection=()=>{
    editorObj?.documentEditor.editor.stopProtection("123")
  }
  return (
    <div className="App">
     <button onClick={onBtnClick} style={{marginBottom:10}}>Insert a comment</button> 
     <button onClick={nextComment} style={{marginBottom:10,marginLeft:5}}>Next</button>
     <button onClick={prevComment} style={{marginBottom:10,marginLeft:5}}>Previous</button>
     <button onClick={protection} style={{marginBottom:10,marginLeft:5}}>Comments only</button>
     <button onClick={removeProtection} style={{marginBottom:10,marginLeft:5}}>Stop protection</button>
     <DocumentEditorContainerComponent height='590'
      ref={(ins=>editorObj=ins)}
      enableToolbar={true} 
      showPropertiesPane={false}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/">
      <Inject services={[Toolbar]}></Inject>
     </DocumentEditorContainerComponent>
    </div>
  );
}

export default App;
