import Route from '@ember/routing/route';
import groupBy from 'lodash/groupBy'

export default class RestaurantsRoute extends Route {
    model() {
        let byProvince = groupBy(this.modelFor('application'), 'Province');
        let byCityEntries = Object.entries(byProvince).map(([k, v]) => [k, groupBy(v, 'City')]);
        return Object.fromEntries(byCityEntries);
    }
}
