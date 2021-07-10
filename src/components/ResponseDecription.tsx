import { useContext } from "react"
import OperationContext from "../context/OperationContext"

export default function ResponseDecription() {
  const { operationResult } = useContext(OperationContext)
  return (
    <pre>
      <h3>RESPONSE INFO</h3>

      {JSON.stringify(operationResult, undefined, 4)}
    </pre>
  )
}
