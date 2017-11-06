import Vue from 'vue';
import NavWrapper from './vue/NavWrapper';
import ContactForm from './vue/ContactForm';
import VeeValidate from 'vee-validate';
import { SearchForm, Category, CategorySelect, FaqContainer, Question, Suggestion } from 'vue-faqs';

Vue.use(VeeValidate);
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
        NavWrapper,
        ContactForm,
        FaqContainer,
        SearchForm,
        Category,
        CategorySelect,
        Question,
        Suggestion,
    }
});

app.$mount('#app');