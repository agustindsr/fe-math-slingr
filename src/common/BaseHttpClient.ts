
export default abstract class BaseHttpClient {

  baseUrl: string = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  public async get(method: string, requestConfiguration?: RequestInit): Promise<Response> {

    console.log(this.baseUrl + method)

    const getRequestConfiguration: RequestInit = { ...requestConfiguration, method: 'get' }
    var request = new Request(this.construcUrl(method, this.baseUrl), getRequestConfiguration)

    return await fetch(request)
  }

  public async post(method: string, payload: any, requestConfiguration?: RequestInit): Promise<Response> {
    const postRequestConfiguration: RequestInit = {
      ...requestConfiguration,
      method: 'post',
      body: JSON.stringify(payload)
    }
    console.log(postRequestConfiguration)
    const request = new Request(this.construcUrl(method, this.baseUrl), postRequestConfiguration)
    return await fetch(request)
  }

  public construcUrl(method: string, base: string): string {
    return new URL(method, base).toString()
  }
}