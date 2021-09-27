new Vue({
    el: '#assignment',
    data: {
        
            output1: '',
            output2: ''
    },
    methods: {
        submit() {
            alert('Hello World');
        },
        set(event) {
            this.output1 = event.target.value;
        },
        get(event) {
            this.output2 = event.target.value;
        }
    }
});