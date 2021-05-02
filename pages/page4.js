import component4 from '../components/component4.js'

export default {
    name: 'Page4',
    components: {component4},

    setup() {        
        const {ref} = Vue;
        const title = 'Page Four'
        const msgToChild = ref(null)
        const msgFromChild = ref(null)

        //set message to child component (and reset after 3 seconds)
        function newMsg() {
            msgToChild.value = 'Hello Child'
            setTimeout(function() {msgToChild.value = null}, 3000)
        }

        //show message from child component 
        function showMsg(msg) {
            msgFromChild.value = msg
        }

        return {title, msgToChild, msgFromChild, newMsg, showMsg}
    },

    template: `
        <div>
            <p>{{ title }}</p>
            <button v-on:click="newMsg()">Send message to child</button><br>           
            <p>Message from child: {{msgFromChild}}</p>
            <br>
            <component4 :msgProp="msgToChild" @msgEmit='showMsg'></component4>
        </div>
    `,
};