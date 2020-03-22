import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class IndexController extends Controller {
    @action
    resetIFrameCount(e) {
        e.target.contentWindow.postMessage({restaurantCount: this.model.length}, '*');
    }
}
