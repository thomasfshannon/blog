import Vue from 'vue';
import NavWrapper from './vue/NavWrapper';
import ContactForm from './vue/ContactForm';
import VeeValidate from 'vee-validate';
// import "materialize-css/js/forms";
// import './prism';
import { SearchForm, Category, CategorySelect, FaqContainer, Question, Suggestion } from 'vue-faqs';

Vue.use(VeeValidate);

if(checkDom('faq')) {
    const faq = new Vue({
        el: '#faq',
        components: {
            FaqContainer,
            SearchForm,
            Category,
            CategorySelect,
            Question,
            Suggestion,
        }
    });
}

if(checkDom('nav')) {
    const nav = new Vue({
        el: '#nav',
        components: {
            NavWrapper
        }
    });
}
if(checkDom('contact')) {
    const contact = new Vue({
        el: '#contact',
        components: {
            ContactForm
        }
    });
}

function checkDom(id) {
    return document.getElementById(id);
}