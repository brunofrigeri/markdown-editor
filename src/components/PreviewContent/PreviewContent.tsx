import React, { useEffect, useState } from 'react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { useLivePrism } from '../../hooks/useLivePrism'
import './index.css'

interface IPreviewContentProps {
  content: string
}

const PreviewContent: React.FC<IPreviewContentProps> = ({ content }) => {
  const [compiledContent, setCompiledContent] = useState<string>('')
  useLivePrism(compiledContent)

  useEffect(() => {
    const compileToString = async () => {
      const source = await remark()
        .use(remarkHtml, { sanitize: false, quoteSmart: true })
        .use(remarkGfm)
        .process(content)

      setCompiledContent(source.toString())
    }

    compileToString()
  }, [content])

  return (
    <div id="preview" className="container">
      <article
        className="prose text-black"
        dangerouslySetInnerHTML={{ __html: compiledContent }}
      />
    </div>
  )
}

export default PreviewContent
