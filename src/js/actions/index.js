    // src/js/actions/index.js
    export function getData(payload) {
      return { type: "DATA_REQUESTED", payload };
    }
    export function getUsers() {
      return { type: "USERS_REQUESTED" };
    }
    export function paginar(payload) {
      return { type: "PAGE_REQUESTED", payload };
    }
