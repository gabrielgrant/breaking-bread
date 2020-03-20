import Route from '@ember/routing/route';
import groupBy from 'lodash/groupBy'

export default class RestaurantsRoute extends Route {
    model() {
        return groupBy(this.modelFor('application'), 'Province');
    }
}
