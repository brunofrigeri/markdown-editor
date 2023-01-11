import React from 'react'
import { TextArea, Preview } from './components'
import { useMouseMove } from './hooks/useMouseMove'
import './index.css'

type EditorProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({ value, setValue }: EditorProps) => {
  useMouseMove()

  return (
    <div className="container">
      <TextArea value={value} setValue={setValue} />
      <div id="handlerMarkdownAndPreview" className="handler" />
      <Preview content={value} />
    </div>
  )
}

export default Editor
