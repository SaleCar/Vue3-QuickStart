import component3 from '../components/component3.js'

export default {
    name: 'Page3',
    components: {component3},

    setup() {
        const title = 'Page Three'
        return {title}
    },
    
    template: `
        <div>
            {{ title }}
            <component3></component3>
        </div>
    `,
  };