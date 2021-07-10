import { useContext } from 'react'
import OperationContext from '../context/OperationContext'

export default function RequestDescription() {
  const { method, precision, expression } = useContext(OperationContext)

  const getRequest =
    <div>
      <h6>Url: https://slingr-math-api.herokuapp.com/api/operations?expression=<strong>{expression}</strong>
        {precision ? `&precision=${precision}` : <></>}</h6>
    </div>;

  const postRequest =
    <div>
      <h6>Url: https://slingr-math-api.herokuapp.com/api/operations</h6>
      <h6>Body: </h6>
      <span>{`{\n'expression':'${expression}'${precision ? `,\n'precicion':${precision}` : ''}\n}`}</span>
    </div>;

  return (
    <pre>
      <h3>REQUEST INFO</h3>
      <h6>Verb: {method}</h6>
      {method === 'GET' ? getRequest : postRequest}
    </pre>
  )
}
