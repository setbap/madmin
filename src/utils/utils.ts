import theme from "./theme";
import { Api } from "./myApi";
import client from "./query_client";
import { createBrowserHistory } from "history";

const api = new Api({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});
const history = createBrowserHistory();

export { theme, api, client, history };
export {
  ACCESS_TOKEN_KEY,
  DrawerWidth,
  REFRESH_TOKEN_KEY,
  TableLocale,
} from "./constant";
