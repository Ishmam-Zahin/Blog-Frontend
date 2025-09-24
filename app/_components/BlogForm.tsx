'use client'

import { useCallback, useState } from "react"
import RichTextEditor from "./RichTextEditor"

export default function BlogForm() {
  const [bodyValue, setBodyValue] = useState<string | null>(null);
  const changeBodyValue = useCallback((newValue:string) => {
    setBodyValue(newValue);
  }, [])
  return (
    <div>
      <RichTextEditor customOnChange={changeBodyValue}/>
    </div>
  )
}
