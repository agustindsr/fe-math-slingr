
export default function Operations({ startPosition, endPosition, expression, setExpression, setFocus }: OperationOptionsProps) {

  const addSimpleOperator = (operator: string) => {
    const left = expression.substring(0, startPosition as number)
    const right = expression.substring(endPosition as number, expression.length)

    if (startPosition === endPosition && startPosition !== expression.length) {
      expression = left + operator + right;

    } else {
      expression = expression + operator;
    }
    setExpression(expression)
    setFocus()
  }

  const addComplextOperator = (operator: string) => {
    const selectedValue = expression.substring(startPosition as number, endPosition as number);
    const left = expression.substring(0, startPosition as number)
    const right = expression.substring(endPosition as number, expression.length)
    const newTerm = operator.replace('x', selectedValue);

    if (startPosition === endPosition) {
      expression = expression + newTerm;
    } else {
      expression = left + newTerm + right;
    }

    setExpression(expression)
    setFocus()
  }

  return (
    <>
      <div className="row my-2">
        <div className="col col-md-3 col-sm-12">
          <div className="col col-md-3 btn btn-light border" onClick={() => addSimpleOperator('+')}>
            +
          </div>
          <div className="col col-md-3 btn btn-light border" onClick={() => addSimpleOperator('-')}>
            -
          </div>
          <div className="col col-md-3 btn btn-light border" onClick={() => addSimpleOperator('/')}>
            /
          </div>
          <div className="col col-md-3 btn btn-light border" onClick={() => addSimpleOperator('*')}>
            *
          </div>
        </div>
        <div className="col col-md-5 col-sm-12">
          <div className="col col-md-3 btn btn-light border" onClick={() => addComplextOperator('sqrt(x)')}>
            sqrt(x)
          </div>
          <div className="col col-md-2 btn btn-light border" onClick={() => addComplextOperator('(x)^2')}>
            x²
          </div>
          <div className="col col-md-3 btn btn-light border" onClick={() => addComplextOperator('cos(x)')}>
            cos(x)
          </div>
          <div className="col col-md-2 btn btn-light border" onClick={() => addComplextOperator('sin(x)')}>
            sin(x)
          </div>
          <div className="col col-md-2 btn btn-light border" onClick={() => addComplextOperator('(x)')}>
            (x)
          </div>
        </div>
        <div className="col col-md-4 col-sm-12">
          <div className="col col-md-4 btn btn-light border" onClick={() => addSimpleOperator('pi')}>
            π
          </div>

          <div className="col col-md-4 btn btn-light border" onClick={() => addSimpleOperator('e')}>
            e
          </div>
        </div>
        <div className="col col-sm-12">
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('1')}>
            1
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('2')}>
            2
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('3')}>
            3
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('4')}>
            4
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('5')}>
            5
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('6')}>
            6
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('7')}>
            7
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('8')}>
            8
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('9')}>
            9
          </div>
          <div className="col col-md-1 btn btn-light border" onClick={() => addSimpleOperator('0')}>
            0
          </div>
        </div>
      </div>
    </>
  )
}


interface OperationOptionsProps {
  startPosition: number | undefined | null,
  endPosition: number | undefined | null,
  setExpression: any,
  expression: string,
  setFocus: any
}