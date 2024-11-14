import { Album } from "../types";
import EndpointBase from "./EndpointBase";

export class AlbumEndpoint extends EndpointBase {
  public async get(id: string): Promise<Album>;
  public async get(id: string) {
    const album = await this.getRequest<Album>(`album/${id}`);

    return album;
  }
}
