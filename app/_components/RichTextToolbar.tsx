import styles from '@/app/_styles/richTextEditor.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {mergeRegister} from '@lexical/utils';
import { $getSelection,
  $isRangeSelection,
  createCommand,
  FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND,
  $createParagraphNode,
  FORMAT_ELEMENT_COMMAND,
} from 'lexical'
import {
  $createHeadingNode,
  HeadingTagType,
  $isHeadingNode,
} from '@lexical/rich-text';

import { $setBlocksType } from '@lexical/selection';
import { useCallback, useEffect, useState } from 'react'

const FORMAT_HEADING_COMMAND = createCommand();

export default function RichTextMenubar() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [whichHeading, setWhichHeading] = useState('normal');

    const setHeading = useCallback((tag: HeadingTagType | null) => {
      const selection = $getSelection();
      if($isRangeSelection(selection)){
        if(!tag){
          $setBlocksType(selection, () => $createParagraphNode());
        }
        else {
          $setBlocksType(selection, () => $createHeadingNode(tag))
        }
      }
    }, [])

    const updateToolbar = useCallback(() => {
      const selection = $getSelection();
      if($isRangeSelection(selection)){
        setIsBold(selection.hasFormat('bold'));
        setIsItalic(selection.hasFormat('italic'));
        setIsUnderline(selection.hasFormat('underline'));

        const node  = selection.anchor.getNode()
        try{
          const parentNode = node.getTopLevelElementOrThrow()
          if($isHeadingNode(parentNode)){
            setWhichHeading(parentNode.getTag());
          }
          else{
            setWhichHeading('normal');
          }
        }
        catch(error){
          console.log(error);
        }
      }
    }, [])

    useEffect(() => {
      return mergeRegister(
        editor.registerUpdateListener(({editorState}) => {
          editorState.read(() => {
            updateToolbar();
          })
        }),
        editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
          updateToolbar();
          return false;
        }, 1),
        editor.registerCommand(FORMAT_HEADING_COMMAND, (payload: HeadingTagType|null) => {
          editor.update(() => {
            setHeading(payload)
          })
          return true
        }, 1)
      )
    }, [editor, updateToolbar, setHeading])
  return (
    <div className={styles.toolbarContainer}>
        <select
        className={styles.toolbarSelectionBtn}
        value={whichHeading === 'normal' ? '' : whichHeading}
        onChange={(e) => editor.dispatchCommand(FORMAT_HEADING_COMMAND, e.target.value)}
        >
          <option value="">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </select>
        <div className={styles.toolbarVerticalLine}></div>
        <button
        className={`${styles.toolbarBtn} ${isBold ? styles.toolbarBtnActive : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-bold' />
          </svg>
        </button>
        <button
        className={`${styles.toolbarBtn} ${isItalic ? styles.toolbarBtnActive : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-italic' />
          </svg>
        </button>
        <button
        className={`${styles.toolbarBtn} ${isUnderline ? styles.toolbarBtnActive : ''}`}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-underline' />
          </svg>
        </button>
        <div className={styles.toolbarVerticalLine}></div>
        <button
        className={styles.toolbarBtn}
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-paragraph-left' />
          </svg>
        </button>
        <button
        className={styles.toolbarBtn}
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-paragraph-center' />
          </svg>
        </button>
        <button
        className={styles.toolbarBtn}
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-paragraph-right' />
          </svg>
        </button>
        <button
        className={styles.toolbarBtn}
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')}
        >
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#icon-paragraph-justify' />
          </svg>
        </button>
    </div>
  )
}
