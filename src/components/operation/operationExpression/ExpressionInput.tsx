import React, { useContext, useRef, useState } from 'react'
import OperationContext from '../../../context/OperationContext';
import Operations from './Operations';

export default function ExpressionInput() {

  const { expression, changeExpressionHandler } = useContext(OperationContext);
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  const changeExpressionEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    changeExpression(value)
  }

  const changeExpression = (value: string) => {
    changeExpressionHandler(value)
  }

  const changeBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setSelectionEnd(e.target.selectionEnd);
    setSelectionStart(e.target.selectionStart);
  }

  const setFocus = () => {
    ref.current?.focus();
  }

  return (
    <div>
      <input type="text"
        ref={ref}
        required
        className="form-control my-2"
        aria-label="Text input with segmented dropdown button"
        value={expression}
        onBlur={changeBlurHandler}
        onChange={changeExpressionEventHandler} placeholder="Math Expression Ej: 1.2*(2+4.5)" />
      <Operations
        expression={expression}
        setExpression={changeExpression}
        startPosition={selectionStart}
        endPosition={selectionEnd}
        setFocus={setFocus} />


    </div>
  )
}
