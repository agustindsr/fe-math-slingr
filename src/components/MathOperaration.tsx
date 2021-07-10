import { useContext, useState } from 'react'
import OperationContext from '../context/OperationContext'
import Expression from './Expression'
import MethodSelect from './MethodSelect'
import OperationResult from './OperationResult'
import PrecisionInput from './PrecisionInput'
import RequestDescription from './RequestDescription'
import ResponseDecription from './ResponseDecription'

export default function MathOperaration() {
  const { expression, autoSolve, changeAutoSolveHandler, solveOperation } = useContext(OperationContext)
  return (
    <div className="input-group my-4 row">

      <div className="row">
        <h3 className="col">Math Operation</h3>
        <div className="col col-md-2">
          <MethodSelect />
        </div>
      </div>
      <div className="row my-4 justify-content-between">
        <div className="col col-md-2">
          <label>Precision</label>

          <PrecisionInput />
        </div>
        <div className="btn col col-md-2" onClick={() => { changeAutoSolveHandler(!autoSolve) }}>
          <input type="checkbox" checked={autoSolve}
            aria-label="Checkbox for following text input" /> AutoSolve
        </div>
      </div>

      <hr />
      <div className="col-md-8">
        <h4>Expression</h4>
        <Expression />
      </div>
      {!autoSolve ?
        <div className="row mt-2">

          <div className="col-md-8 btn btn-primary" onClick={solveOperation}>
            Solve
          </div> </div>
        : null}

      {expression ?
        <>
          <div className="mt-4">
            <OperationResult />
          </div>
          <hr />
          <div className="row mt-4 ">
            <div className="col-md-8">
              <RequestDescription />
            </div>
            <div className="col-md-4">
              <ResponseDecription />
            </div>
          </div>
        </>
        : null}
    </div>
  )
}
