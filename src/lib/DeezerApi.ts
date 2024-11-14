import { AlbumEndpoint } from "./endpoints/AlbumEndpoint";
import { ChartEndpoint } from "./endpoints/ChartEndpoint";
import { PlaylistEndpoint } from "./endpoints/PlaylistEndpoint";

export class DeezerApi {
  private static baseUrl: string =
    "https://api.codetabs.com/v1/proxy?quest=https://api.deezer.com/";

  public constructor() {
    this.chart = new ChartEndpoint(this);
    this.playlist = new PlaylistEndpoint(this);
    this.album = new AlbumEndpoint(this)
  }

  public chart: ChartEndpoint;
  public playlist: PlaylistEndpoint;
  public album: AlbumEndpoint

  public async request<T>(req: {
    url: string;
    method?: "GET" | "POST";
  }): Promise<T> {
    try {
      const { url, method } = req;
      const fullUrl = DeezerApi.baseUrl + url;
      const opts = {
        method,
      };
      const result = await fetch(fullUrl, opts);
      const text = await result.text();
      if (text.length > 0) {
        const json = JSON.parse(text);
        return json as T;
      }
      return null as T;
    } catch {
      return null as T;
    }
  }
}

export const apiClient = new DeezerApi();
