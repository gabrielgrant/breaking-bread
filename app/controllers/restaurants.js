import Controller from '@ember/controller';
import groupBy from 'lodash/groupBy'
import { tracked } from '@glimmer/tracking';

export default class RestaurantsController extends Controller {
    queryParams = ['province', 'service'];
    @tracked province = null;
    @tracked service = null;
    get filteredRestaurants() {
        let filteredModel = this.model;
        if (this.province) {
            filteredModel = filteredModel.filter(r => r.Province === this.province);
        }
        if (this.service) {
            filteredModel = filteredModel.filter(r => (r['Services Offered'] || []).has(this.service));
        }
        return filteredModel;
    }
    get sortedRestaurants() {
        let byProvince = groupBy(this.filteredRestaurants, 'Province');
        let byCityEntries = Object.entries(byProvince).map(([k, v]) => [k, groupBy(v, 'City')]);
        return new Map(byCityEntries);
    }
    get services() {
        return  this.model.reduce(((services, r) => new Set([...services, ...r['Services Offered']])), []);
    }
}
