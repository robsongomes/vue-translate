import axios from "axios";
import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";

const instance = axios.create({
  baseURL: "http://localhost:3000"
});

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    alert("erro", error);
    vm.flash(`${error.response.status}: ${error.response.statusText}`, "error");
  });

export const api = {
  getWords: handleError(async () => {
    const res = await instance.get("/words");
    return res.data;
  }),

  getWord: handleError(async id => {
    const res = await instance.get(`/words/${id}`);
    return res.data;
  }),

  createWord: handleError(async payload => {
    const res = await instance.post("/words", payload);
    vm.flash(`Tradução criada com sucesso.`);
    return res.data;
  }),

  updateWord: handleError(async payload => {
    const res = await instance.put(`/words/${payload._id}`, payload);
    vm.flash(`Tradução atualizada com sucesso.`);
    return res.data;
  }),

  deleteWord: handleError(async id => {
    const res = await instance.delete(`/words/${id}`);
    return res.data;
  })
};
