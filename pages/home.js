export default {
    name: 'Home',

    setup() {
        const title = 'Home page'
        return {title}
    },

    template: `
        <div>
            {{ title }}
        </div>
        <div>
             <form-kit type="text" />
             <FormKit type="text" />
        </div>
    `,
  };
