import { createContext } from "react";
import MathApiService from "../services/MathApiService";
import { useState, useEffect } from 'react'

const OperationContext = createContext<OperationContextInterface>({
  method: 'GET',
  changeMethodHandler: null,
  precision: undefined,
  changePrecisionHandler: null,
  expression: '',
  changeExpressionHandler: null,
  operationResult: undefined,
  isLoading: false,
  autoSolve: true,
  changeAutoSolveHandler: null,
  solveOperation: null
});

export function OperationProvider({ children }: OperationProviderInterface) {
  const [method, setMethod] = useState<string>('GET');
  const [expression, setExpression] = useState<string>('');
  const [precision, setPrecision] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [autoSolve, setAutoSolve] = useState<boolean>(true);
  const [operationResult, setOperationResult] = useState<number | string>();


  useEffect(() => {
    if (autoSolve) solveOperation()
  }, [method, expression, precision, autoSolve])


  const solveOperation = async () => {
    if (expression && expression !== '') {
      setIsLoading(true);
      const result = await MathApiService.solveOperation({ expression, precision, method });
      setOperationResult(result);
      setIsLoading(false);
    }
  };

  const changeMethodHandler = async (method: string) => {
    setMethod(method)
  }

  const changeAutoSolveHandler = async (autoSolve: boolean) => {
    setAutoSolve(autoSolve)
  }

  const changeExpressionHandler = async (expression: string) => {
    setExpression(expression)
  }

  const changePrecisionHandler = async (precision: number | undefined) => {
    setPrecision(precision)
  }

  return (
    <OperationContext.Provider value={
      {
        method,
        changeMethodHandler,
        expression,
        changeExpressionHandler,
        precision,
        changePrecisionHandler,
        operationResult,
        isLoading,
        autoSolve,
        changeAutoSolveHandler,
        solveOperation
      }}>
      {children}
    </OperationContext.Provider>)
}

interface OperationContextInterface {
  method: string,
  changeMethodHandler: any,
  expression: string,
  changeExpressionHandler: any,
  precision: number | undefined,
  changePrecisionHandler: any,
  operationResult: number | undefined | string,
  isLoading: boolean,
  autoSolve: boolean,
  changeAutoSolveHandler: any,
  solveOperation: any,
};

interface OperationProviderInterface {
  children: React.ReactNode
};

export default OperationContext