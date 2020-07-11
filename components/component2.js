import store from '../store.js'

export default {
    name: 'Two',
    
    props: {
        message: String,
    },
    
    setup(props) {
        const {onMounted} = Vue;

        onMounted(() => {
            if (props.message) store.message = props.message;
        })

        return {store};
    },
   

    template: `
        <h1>Component Two</h1>
        <div>
            <input v-model="store.message" placeholder="Write something">
            <p><small>...or add <strong><a href="?msg=something">msg parameter</a></strong> to url</small></p>
            <h4 v-if="store.message">You wrote: {{ store.message }}</h4>
        </div>
    `,
};