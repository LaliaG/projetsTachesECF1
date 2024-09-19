<!-- <script setup>
import { mapGetters } from 'pinia';
import { useTodosStore } from '../stores/todosStore';
const { changeFavoriteStatus, removeTodo } = useTodosStore();
const props = defineProps({
    todo: {
        type: Object,
        required:true,
    },
    index: {
        type: Number,
        required: true,
    }
})
const colorFavorite = (favorite) => {
    if(favorite){
        return 'text-danger';
    }
    return '';
}
ok a revoir dnas la TodoList mapGetters
<script setup>
import { useTodosStore } from '../stores/todosStore';
const { changeFavoriteStatus, removeTodo } = useTodosStore();
const props = defineProps({
    todo: {
        type: Object,
        required:true,
    },
    index: {
        type: Number,
        required: true,
    }
})
const colorFavorite = (favorite) => {
    if(favorite){
        return 'text-danger';
    }
    return '';
} -->
