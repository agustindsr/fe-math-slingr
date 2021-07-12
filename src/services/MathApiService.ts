import resolverOperationDto from "../common/interfaces/resolverOperationDto";
import MathApiHttpClient from "../common/MathApiHttpClient";


class MathApiService {
  async solveOperation({ expression, precision, method }: resolverOperationDto): Promise<number | string> {

    let response: Response;
    let url = 'api/operations'

    if (method === "GET") {
      var queryParameters = new URLSearchParams({ expression: expression });

      if (precision === 0 || precision) {
        queryParameters.append('precision', precision.toString())
      }

      url = `${url}?${queryParameters}`;
      response = await MathApiHttpClient.getAsync(url);
    }
    else {
      let payload: { [k: string]: any } = {};
      payload.expression = expression
      if (precision === 0 || precision) {
        payload.precision = precision
      }
      response = await MathApiHttpClient.postAsync(url, payload);
    }


    if (response.ok) {
      return await response.json() as number
    }

    return response.json()
  }
}

export default new MathApiService();