import { InstallXOptions } from "@empathyco/x-components";
import App from "../App.vue";
import store from "../store";
import { adapter } from "../adapter/adapter";

export const installXOptions: InstallXOptions = {
  adapter,
  store,
  app: App,
};
