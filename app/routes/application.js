import Route from '@ember/routing/route';
import Papa from 'papaparse';
import trim from 'lodash/trim';

export default class ApplicationRoute extends Route {
    async model() {
        let result = await new Promise((resolve, reject) => {
            const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKLXMryGmJV8P9ajBwXu5cYsw9982eJdEr1SZPYSPH0OW8_6ewlVBc6CNbTyQNSnjNIHXQo2-FXNVa/pub?gid=0&single=true&output=csv";
            Papa.parse(url, {
                download: true,
                header: true,
                skipEmptyLines: 'greedy',
                complete: resolve,
                error: reject
            });
        });
        result.data.forEach(e => e['Instagram Handle'] = trim(e['Instagram Handle'], '@'));
        return result.data.filterBy('Approved', 'TRUE');
    }
}
