import { useContext } from 'react'
import OperationContext from '../../../context/OperationContext'
import MethodSelect from './MethodSelect'
import PrecisionInput from './PrecisionInput'

export default function OperationsSettings() {
  const { autoSolve, changeAutoSolveHandler } = useContext(OperationContext)

  return (
    <div id="settings">
      <h4>Settings</h4>
      <div className="mt-2">
        <label>Method</label>
        <MethodSelect />
      </div>

      <div className="mt-2">
        <label>Precision</label>
        <PrecisionInput />
      </div>

      <div className="btn px-0 mt-2" onClick={() => { changeAutoSolveHandler(!autoSolve) }}>
        <input type="checkbox"
          checked={autoSolve}
          onChange={() => { }}
          aria-label="Checkbox for following text input" /> AutoSolve
      </div>
    </div>
  )
}
