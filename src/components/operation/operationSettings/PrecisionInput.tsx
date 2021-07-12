import React, { useContext, useState } from 'react'
import OperationContext from '../../../context/OperationContext';

export default function PrecisionInput() {
  const [error, setError] = useState<boolean>(false);
  const { precision, changePrecisionHandler } = useContext(OperationContext);
  const precisionChangleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as { value: string }
    console.log(value)
    const precision = parseInt(value) ?? undefined;
    if (!precision || (precision >= 0 && precision < 21)) {
      setError(false)
      changePrecisionHandler(precision)
    }
    else {
      setError(true)
    }
  }

  return (
    <>
      <input type="number"
        step="1"
        min="0"
        max="20"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        value={precision}
        onChange={precisionChangleHandler} placeholder="Precision" />
      {error ? <span className="text-danger">The precision has to be greater than or equal to zero and less than 21</span> : <></>}
    </>
  )
}
