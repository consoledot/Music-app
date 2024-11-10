import { Playlist } from "../types";
import EndpointBase from "./EndpointBase";

export class PlaylistEndpoint extends EndpointBase {
  public async get(id: string): Promise<Playlist>;
  public async get(id: string) {
    const playlist = await this.getRequest<Playlist>(`playlist/${id}`);

    return playlist;
  }
}
