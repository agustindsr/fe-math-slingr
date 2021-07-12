import { useContext } from 'react'
import OperationContext from '../../context/OperationContext'
import OperationExpression from './operationExpression'
import OperationsSettings from './operationSettings'
import OperationDescription from './operationDescription'

export default function MathOperaration() {
  const { expression } = useContext(OperationContext)
  return (
    <div className="input-group my-4 row">

      <div className="col-xs-12 col-md-8 my-2" id="expression">
        {<OperationExpression />}
      </div>
      <div className="col-md-4 col-xs-12 my-2">
        {<OperationsSettings />}
      </div>
      {expression ?
        <div>
          <hr />
          {<OperationDescription />}
        </div>
        : null}
    </div>
  )
}
