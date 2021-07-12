
export default function Operations({ startPosition, endPosition, expression, setExpression, setFocus }: OperationOptionsProps) {

  const clear = () => {
    setExpression('')
  }
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
      <div className="row mx-0">
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addComplextOperator('sin(x)')}><strong>sin(x)</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('(')}><strong>(</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator(')')}><strong>)</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('%')}><strong>%</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-primary" onClick={() => { clear() }}><strong>AC</strong></div>

      </div>
      <div className="row mx-0">
        <div className="col col-xs-2 px-0 border btn btn-light " onClick={() => addComplextOperator('cos(x)')}><strong>cos(x)</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('7')}>7</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('8')}>8</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('9')}>9</div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('/')}><strong>/</strong></div>

      </div>
      <div className="row mx-0">
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addComplextOperator('(x)^2')}><strong>x²</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('4')}>4</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('5')}>5</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('6')}>6</div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('*')}><strong>*</strong></div>

      </div>
      <div className="row mx-0">
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addComplextOperator('sqrt(x)')}><strong>√</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('1')}>1</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('2')}>2</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('3')}>3</div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('-')}><strong>-</strong></div>

      </div>
      <div className="row mx-0">
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('e')}><strong>e</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('pi')}><strong>π</strong></div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('0')}>0</div>
        <div className="col col-xs-2 px-0 border btn btn-white" onClick={() => addSimpleOperator('.')}>.</div>
        <div className="col col-xs-2 px-0 border btn btn-light" onClick={() => addSimpleOperator('+')}><strong>+</strong></div>
      </div>
      {/* <div className="row mx-0 my-2">
        <div className="col col-xs-3">
          {['+', '-', '/', '*'].map(x => (
            <div className="col col-md-3 btn btn-white border" onClick={() => addSimpleOperator('')}>
              {x}
            </div>))}
        </div>

        <div className="col col-xs-5">

          <div className="col col-md-3 btn btn-white border" onClick={() => addComplextOperator('sqrt('')')}>
            sqrt('')
          </div>
          <div className="col col-xs-2 px-0 border btn btn-white border" onClick={() => addComplextOperator('('')^2')}>
            x²
          </div>
          <div className="col col-xs-3 btn btn-white border" onClick={() => addComplextOperator('cos('')')}>
            cos('')
          </div>
          <div className="col col-xs-2 px-0 border btn btn-white border" onClick={() => addComplextOperator('sin('')')}>
            sin('')
          </div>
          <div className="col col-xs-2 px-0 border btn btn-white border" onClick={() => addComplextOperator('('')')}>
            ('')
          </div>
        </div>
        <div className="col col-xs-4">
          <div className="col col-xs-4 btn btn-white border" onClick={() => addSimpleOperator('pi')}>
            π
          </div>

          <div className="col col-xs-4 btn btn-white border" onClick={() => addSimpleOperator('e')}>
            e
          </div>
        </div>
      </div>
      <div className="row mx-0 col-xs-2 px-0 border">
        <div className="row mx-0">
          {[1, 2, 3].map(x => (
            <div className="col col-xs-2 px-0 border col-xs-offset-1 btn btn-white border" onClick={() => addSimpleOperator(x.toString())}>
              {x}
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {[4, 5, 6].map(x => (
            <div className="col col-xs-3 btn btn-white border" onClick={() => addSimpleOperator(x.toString())}>
              {x}
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {[7, 8, 9].map(x => (
            <div className="col col-xs-3 btn btn-white border" onClick={() => addSimpleOperator(x.toString())}>
              {x}
            </div>
          ))}
        </div>
      </div>*/}
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