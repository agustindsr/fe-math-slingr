import { useContext } from 'react'
import OperationContext from '../../../context/OperationContext'
import Spinner from '../../shared/Spinner'

export default function OperationResult() {
  const { operationResult, isLoading } = useContext(OperationContext)

  const isSuccessResult = typeof operationResult === "number";


  const result = <div className={`alert alert-${isSuccessResult ? 'success' : 'danger'}`} role="alert">
    {isSuccessResult ? `Result: ${operationResult}` : 'Wrong formula'}
  </div>


  return (
    <div>
      {isLoading ? <div className="row justify-content-center my-2"><Spinner /></div> : result}
    </div>
  )
}
