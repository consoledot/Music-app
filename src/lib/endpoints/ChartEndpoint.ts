import { Charts } from "../types";
import EndpointBase from "./EndpointBase";

export class ChartEndpoint extends EndpointBase {
  public async get(): Promise<Charts>;

  public async get() {
    const chart = await this.getRequest<Charts>("chart");
    return chart;
  }
}
