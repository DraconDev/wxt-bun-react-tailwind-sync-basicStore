import { defineConfig } from "wxt";
// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "webextension-polyfill", // Corrected from "webextension" to "webextension-polyfill"
  // Firefox manifest overrides
  overrides: {
    firefox: {
      manifest: {
        browser_specific_settings: {
          gecko: {
            id: "example-extension@yourdomain.com", // Required for Firefox - choose a unique ID
            strict_min_version: "0.0.45" // Minimum Firefox version that supports your extension
          }
        }
      }
    }
  },
  manifest: {
    name: "Example Extension",
    description: "Example Extension",
    version: "0.0.44",
    permissions: ["storage"],
    icons: {
      "16": "icon/16.png",
      "32": "icon/32.png",
      "48": "icon/48.png",
      "96": "icon/96.png",
      "128": "icon/128.png",
    },
    action: {
      default_popup: "popup.html",
      default_icon: {
        "16": "icon/16.png",
        "32": "icon/32.png",
        "48": "icon/48.png",
        "128": "icon/128.png",
      },
      default_title: "",
    },
  },
  modules: ["@wxt-dev/module-react"],
});
