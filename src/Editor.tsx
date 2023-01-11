import React from 'react'
import { TextArea, Preview } from './components'
import { useMouseMove } from './hooks/useMouseMove'
import './index.css'

type MarkdownEditorProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const MarkdownEditor = ({ value, setValue }: MarkdownEditorProps) => {
  useMouseMove()

  return (
    <div className="container">
      <TextArea value={value} setValue={setValue} />
      <div id="handlerMarkdownAndPreview" className="handler" />
      <Preview content={value} />
    </div>
  )
}

export default MarkdownEditor
