import Vue from 'vue';
import NavWrapper from './vue/NavWrapper';


const hello = Vue.extend({
    data: () => {
        return {
            name: 'World'
        }
    },
    template: '<h2>Hello {{ name }}</h2>',
});

const app = new Vue({
    components: {
        hello,
        NavWrapper
    }
});

app.$mount('#app');