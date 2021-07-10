import React, { useContext } from 'react'
import OperationContext from '../context/OperationContext';

export default function MethodSelect() {

  const { method, changeMethodHandler } = useContext(OperationContext);
  const methodChangleHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target as { value: string }
    changeMethodHandler(value)
  }

  return (
    <select className="form-select"
      aria-label="select method"
      value={method}
      onChange={methodChangleHandler}>
      <option value="GET">GET</option>
      <option value="POST">POST</option>
    </select>
  )
}
