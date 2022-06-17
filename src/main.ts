import "reflect-metadata";
import { XInstaller, xPlugin } from "@empathyco/x-components";
import Vue from "vue";
import { installXOptions } from "@/x-components/plugin.options";
import { adapter } from "@/adapter/adapter";

Vue.config.productionTip = false;

new XInstaller(installXOptions).init();

Vue.use(xPlugin, { adapter });
