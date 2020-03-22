import Controller from '@ember/controller';
import groupBy from 'lodash/groupBy'

export default class RestaurantsController extends Controller {
    get sortedRestaurants() {
        let byProvince = groupBy(this.model, 'Province');
        let byCityEntries = Object.entries(byProvince).map(([k, v]) => [k, groupBy(v, 'City')]);
        return Object.fromEntries(byCityEntries);
    }
}
