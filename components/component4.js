export default {
    name: 'Four',
    
    props: ['msgProp'],
    emits: ['msgEmit'],
    

    setup(props, {emit}) {

        //emit message to parent (and reset after 3 seconds)
        function newMsg() {
            emit('msgEmit', 'Hello Parent')
            setTimeout(function() {emit('msgEmit', '')}, 3000)
        }

        return {props, newMsg};
    },
   

    template: `
        <h1>Component Four</h1>
        <button v-on:click="newMsg()">Send message to parent</button><br>
        <p>Message from page: {{props.msgProp}}</p>
    `,
};