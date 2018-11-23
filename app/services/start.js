import Service from '@ember/service';

export default Service.extend({
    isAuthenticated: true,
    myhandler() {
        return "btn clicked: reported @ service.";
    }
});
