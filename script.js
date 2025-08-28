import http from 'k6/http'

export const options = {
    maxRedirects: 10,
    scenarios: {
    	contracts: {
    		executor: 'constant-arrival-rate',
    		rate: 50,
    		duration: '30s',
    		preAllocatedVUs: 50,
    		maxVUs: 100,
    	},
    },
};

export default function () {
	http.get(''); // add your url
}
