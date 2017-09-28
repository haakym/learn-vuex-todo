
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import store from './store';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('todo', require('./components/Todo.vue'));

import { mapState, mapMutations } from 'vuex';

const app = new Vue({
    el: '#app',

    store,

    computed: {
        ...mapState(['todos']),

        allCompleted () {
            return this.todos.every(todo => todo.done);
        }
    },

    methods: {
        ...mapMutations(['completeAll']),

        addTodo (e) {
            let body = e.target.value;

            this.$store.commit('addTodo', body);

            e.target.value = '';
        }
    }
});
