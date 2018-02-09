import { SecureStore } from "expo";
import { WKClient } from "./util/wanikani";

export const REQUEST_DATA = "REQUEST_DATA";

function requestData() {
  return {
    type: REQUEST_DATA
  };
}

function fetchData() {
  return dispatch => {
    dispatch(requestData());
    return SecureStore.getItemAsync("apiKey").then(apiKey => {
      if (apiKey) {
        const client = new WKClient(apiKey);
        return client.get("vocabulary");
      }
    });
  };
}
