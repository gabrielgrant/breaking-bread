import Route from '@ember/routing/route';

export default class RestaurantRoute extends Route {
    model(params) {
        return this.modelFor('application').filterBy('id', params.restaurant_id)[0];
    }
}
