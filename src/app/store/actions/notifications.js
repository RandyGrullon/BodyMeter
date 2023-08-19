import { createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

import { accountApi } from "../../api";

export const loadNotificationsThunk = createAsyncThunk(
  "notifications/load",
  async (params) => {
    const result = await accountApi.getNotifications(params);

    const notifications = result.data.sort((a, b) => {
      const x = moment(a.created_at).valueOf();
      const y = moment(b.created_at).valueOf();

      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
    return notifications;
  }
);
