// a wrapper around navigation for mobile sidebar
export default {
    data: () => {
        return {
            sidebar: false,
            currentOverlay: '',
        }
    },
    methods: {
        toggleSideBar() {
            this.sidebar = !this.sidebar;
        },
        changeOverlay(target) {
            this.currentOverlay = target;
        },
        cancelOverlay() {
            this.currentOverlay = '';
        },
    },
}