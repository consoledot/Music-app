

export class AppStoreOutOfContextError extends Error {
  constructor() {
    super("use AppStore is expected to be used in the AppStoreContext");
  }
}



