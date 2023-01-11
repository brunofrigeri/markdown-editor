import React from 'react'
import MarkdownTextArea from './components/MarkdownTextArea'
import PreviewContent from './components/PreviewContent'
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
      <MarkdownTextArea value={value} setValue={setValue} />
      <div id="handlerMarkdownAndPreview" className="handler" />
      <PreviewContent content={value} />
    </div>
  )
}

export default MarkdownEditor
