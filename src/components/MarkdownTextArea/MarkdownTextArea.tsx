import React, { useRef } from 'react'
import './index.css'

interface MarkdownTextAreaProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const MarkdownTextArea = ({ value, setValue }: MarkdownTextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleTabKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Tab') {
      event.preventDefault()

      setValue((prevValue) => prevValue.concat('  '))
    }
  }

  return (
    <textarea
      id="mdxEditor"
      ref={inputRef}
      placeholder="Write your post content here..."
      value={value}
      className="container"
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleTabKey}
    />
  )
}

export default MarkdownTextArea
