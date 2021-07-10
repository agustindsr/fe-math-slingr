import resolverOperationDto from "../common/interfaces/resolverOperationDto";
import MathApiHttpClient from "../common/MathApiHttpClient";


class MathApiService {
  async solveOperation({ expression, precision, method }: resolverOperationDto): Promise<number | string> {

    let response: Response;
    let url = 'api/operations'

    if (method === "GET") {
      var queryParameters = new URLSearchParams({ expression: expression });

      if (precision) {
        queryParameters.append('precision', precision.toString())
      }

      url = `${url}?${queryParameters}`;
      response = await MathApiHttpClient.getAsync(url);
    }
    else {
      const payload = { expression: expression }
      response = await MathApiHttpClient.post(url, payload);
    }


    if (response.ok) {
      return await response.json() as number
    }
    else return response.json()
  }
}

export default new MathApiService();