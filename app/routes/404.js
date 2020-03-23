import Route from '@ember/routing/route';

export default class NotFoundRoute extends Route {
    model(params){
        console.log(params);
        switch (params.path) {
            case 'get-involved':
                this.transitionTo('signup');
                break;
            case 'participants':
                this.transitionTo('restaurants');
                break;
            case 'restaurants/all':
                this.transitionTo('restaurants');
                break;
            case 'british-columbia':
                this.transitionTo('restaurants', {queryParams: {province: 'BC'}});
                break;
        }
    }
}
