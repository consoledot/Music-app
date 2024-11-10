import { DeezerApi } from "../DeezerApi";

export default class EndpointBase {
  constructor(protected api: DeezerApi) {}

  protected async getRequest<T>(url: string): Promise<T> {
    return await this.api.request({ url });
  }

  protected buildParams(arg: Record<string, string | number>) {
    if (!arg) return "";
    let route = "";
    Object.entries(arg).forEach(
      (v, i) => (route = route + (i == 0 ? "?" : "&") + v[0] + "=" + v[1])
    );
    return route;
  }
}
