<template>
    <li class="todo" :class="{ 'is-complete': todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
        <span>
            <label v-text="todo.body" v-show="! editing" @dblclick="editing = true"></label>
            <input :value="todo.body" v-show="editing" :autofocus="editing" @keyup.enter="updateTodo">
        </span>
        <button @click="deleteTodo(todo)">x</button>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: ['todo'],

        data () {
            return {
                body: this.todo.body,
                editing: false
            }
        },

        methods: {
            ...mapMutations(['deleteTodo', 'toggleTodo', 'editTodo']),
            updateTodo (e) {
                this.$store.commit('updateTodo', {
                    todo: this.todo,
                    body: e.target.value
                });

                this.editing = false
            }
        }
    }
</script>

<style>
    .todo.is-complete {
        color: grey;
    }
</style>
