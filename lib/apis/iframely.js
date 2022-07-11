import { IFRAMELY_BASE_URL } from "constants/common";

import axios from "axios";

export const getIframelyData = ({ url }) =>
  axios.get(`${IFRAMELY_BASE_URL}`, {
    headers: {},
    params: {
      url,
      type: "iframely",
    },
  });
