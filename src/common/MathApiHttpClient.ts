import BaseHttpClient from "./BaseHttpClient"

class MathApiHttpClient extends BaseHttpClient {

  defaultRequestConfiguration: RequestInit = { mode: 'cors', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };

  constructor() {
    super("https://slingr-math-api.herokuapp.com/")
  }

  public async getAsync(method: string, headers?: Record<string, string>): Promise<Response> {
    const response = await super.get(method, { ...this.defaultRequestConfiguration, headers: { ...this.defaultRequestConfiguration.headers, ...headers } });
    return response;
  }

  public async postAsync(method: string, payload: any, headers?: Record<string, string>): Promise<Response> {

    const response = await super.post(method, payload, { ...this.defaultRequestConfiguration, headers: { ...this.defaultRequestConfiguration.headers, ...headers } });

    return response;
  }
}

export default new MathApiHttpClient();