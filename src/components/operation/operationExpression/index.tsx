import { useContext } from 'react'
import OperationContext from '../../../context/OperationContext'
import ExpressionInput from './ExpressionInput'
import OperationResult from './OperationResult'

export default function OperationExpression() {
  const { expression, autoSolve, solveOperation } = useContext(OperationContext)

  return (
    <div className="row">
      <h4>Expression</h4>
      <ExpressionInput />
      {!autoSolve ? <div className="btn btn-primary btn-block col col-xs-12 m-2" onClick={solveOperation}>
        Solve
      </div> : null}
      {expression ?
        <div className="mt-4 col-xs-12">
          <OperationResult />
        </div> : null}
    </div>
  )
}
