import store from '../store.js'
import functions from '../functions.js'

export default {
    name: 'Three',

    setup() {
        const {watchEffect, onMounted, ref} = Vue;    
        
        //get data from server
        const serverdata = ref(null);
        const tabledata = ref(null);
        onMounted(() => {            
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => serverdata.value = data);          
        })


        //search
        watchEffect(() => {
            if (serverdata.value) {
                if (store.searchString) {
                    tabledata.value = serverdata.value.filter(function (el) {return el.title.includes(store.searchString);  });
                } else {tabledata.value = serverdata.value};
            }            
        })


        //table sort
        let sortByColumn = ref(null);
        watchEffect(() => {
            if (serverdata.value) {
                if (!sortByColumn.value && store.sortedColumn) {serverdata.value.sort(functions.sort(store.sortedColumn, store.sortedOrder));}
                if (sortByColumn.value == store.sortedColumn) {
                    if (store.sortedOrder == "asc") {store.sortedOrder = "desc"} else {store.sortedOrder = "asc"}
                    serverdata.value.sort(functions.sort(sortByColumn.value, store.sortedOrder)); store.sortedColumn = sortByColumn.value;
                } else {
                    serverdata.value.sort(functions.sort(sortByColumn.value, "asc")); store.sortedOrder="asc"; store.sortedColumn = sortByColumn.value;                   
                }
                sortByColumn.value = null;         
            }
        })


        return {tabledata, store, sortByColumn}
    },

    
    template: `
    <div>
        <h1>Component Three</h1>
        <p>Fetch JSON data (Fake Online REST API)</p>
        <input v-model="store.searchString" placeholder="Search title">
        <small v-if="tabledata && store.searchString">{{ tabledata.length }} item(s) found</small> 
        <table>
            <tr>
                <th><a href="javascript:void(0);" v-on:click="sortByColumn = 'userId'">userId</a></th>
                <th><a href="javascript:void(0);" v-on:click="sortByColumn = 'id'">id</a></th>
                <th><a href="javascript:void(0);" v-on:click="sortByColumn = 'title'">title</a></th>
                <th><a href="javascript:void(0);" v-on:click="sortByColumn = 'completed'">completed</a></th>
            </tr>        
            <tr v-for="item in tabledata">
                <td>{{ item.userId }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td><input type="checkbox" :checked="item.completed"></td>
            </tr>
        </table>
    </div>
    `,
};