import {IS_USER_AUTHENTICATED, GET_USERNAME, GET_PASSWORD } from "../storeconstants";

export default {
    [IS_USER_AUTHENTICATED](state) {
        return state.authenticated;
    },

    [GET_USERNAME](state) {
        return state.username;
    },

    [GET_PASSWORD](state) {
        return state.password;
    }
}