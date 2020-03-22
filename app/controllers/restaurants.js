import Controller from '@ember/controller';
import groupBy from 'lodash/groupBy'
import { tracked } from '@glimmer/tracking';

export default class RestaurantsController extends Controller {
    queryParams = ['province'];
    @tracked province = null;
    get filteredRestaurants() {
        if (this.province) {
            return this.model.filter(r => r.Province === this.province);
        } else {
            return this.model;
        }
    }
    get sortedRestaurants() {
        let byProvince = groupBy(this.filteredRestaurants, 'Province');
        let byCityEntries = Object.entries(byProvince).map(([k, v]) => [k, groupBy(v, 'City')]);
        return Object.fromEntries(byCityEntries);
    }
}
