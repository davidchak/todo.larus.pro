import { FC, useEffect, useRef } from "react";
import { EditorView, keymap } from "@codemirror/view";
import {defaultKeymap} from "@codemirror/commands";
import styled from "@emotion/styled";

const WrapperDiv = styled.div`
  width: 800px;
  height: 600px;
  border: 2px solid grey;
`


export const CodeEditor: FC = () => {
  const viewRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const codeViewer = new EditorView({
      doc: "",
      extensions: [keymap.of(defaultKeymap)],
      parent: viewRef.current as Element,
    })

    return () => {
      codeViewer.destroy();
    }
  },[])


  return (<WrapperDiv ref={viewRef}></WrapperDiv>)
}