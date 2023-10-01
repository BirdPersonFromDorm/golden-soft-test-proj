import axios, {AxiosProgressEvent} from "axios";

import * as rolls from "./rolls";

export const createApi = () => {
    return axios.create({
        string: undefined,
        baseURL: 'https://goldensoft.tech',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Credentials": true,
            Accept: "application/json, application/x-www-form-urlencoded",
        }
    });
};

export const backend = {
    rolls
};
