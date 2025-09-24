import react from 'react';
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode } from '@lexical/rich-text';
import { ParagraphNode } from 'lexical';
import { $generateHtmlFromNodes} from "@lexical/html";

import styles from '@/app/_styles/richTextEditor.module.css';
import { editorTheme } from '../_lib/richTextEditorTheme';
import RichTextToolbar from './RichTextToolbar';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

const editorConfig = {
  namespace: 'MyEditor',
  nodes: [HeadingNode, ParagraphNode],
  onError(error: Error) {
    throw error;
  },
  theme: editorTheme,
};

const RichTextEditor = react.memo(function RichTextEditor({customOnChange}: {customOnChange: (newValue: string) => void}) {
  console.log('i am rerendering...')
  return (
    <div className={styles.container}>
        <LexicalComposer initialConfig={editorConfig}>
            <RichTextToolbar />
            <RichTextPlugin
            contentEditable={
                <ContentEditable
                aria-placeholder={'Enter some text...'}
                placeholder={<div className={styles.placeholder}>Enter some text...</div>}
                className={styles.textArea}
                />
            }
            ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <OnChangePlugin
            onChange={(editorState, editor) => {
              editorState.read(() => {
                const data = $generateHtmlFromNodes(editor);
                customOnChange(data);
              })
            }}
            />
        </LexicalComposer>
    </div>
  )
})
export default RichTextEditor;
