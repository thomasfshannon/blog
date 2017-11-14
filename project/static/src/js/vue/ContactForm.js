// contact form
export default {
    data: () => {
        return {
            name: '',
            email: '',
            message: '',
            alert: {
                success: false,
            },
            pending: false
        }
    },
    methods: {
        clearForm(e) {
            this.name = '';
            this.email = '';
            this.message = '';
            this.$validator.reset();
            Object.keys(this.fields).map(key => this.fields[key].pristine = true);
            e.target.reset();
        },
        simulated(cb) {
            this.pending = true;
            setTimeout(() => {
                this.alert.success = true;
                this.pending = false;
            }, 1000);
        },
        submit(e) {
            this.simulated();
            // $.ajax({
            //     url: '//formspree.io/thomasshannon1117@yahoo.com', 
            //     method: 'POST',
            //     data: {
            //         name: this.name,
            //         email: this.email,
            //         message: this.message
            //     },
            //     dataType: 'json',
            //     success: () => {
            //         this.alert.success = true;
            //         this.pending = true;
            //     }
            // });

            this.clearForm(e);
        }
    },
}

