import { addons } from "@storybook/addons";
import caliberTheme from "./caliberTheme";
import Favicon from "./public/favicon_light.ico";

addons.setConfig({
  theme: caliberTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", Favicon);
document.head.appendChild(link);
