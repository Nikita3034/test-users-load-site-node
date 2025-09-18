import http from 'k6/http'

export const options = {
	// maximum number of redirects
    maxRedirects: 10,
	// load testing scenarios
    scenarios: {
		// name of scenario
    	contracts: {
			// type of scenario
			// shared-iterations | per-vu-iterations | constant-vus | ramping-vus | constant-arrival-rate | ramping-arrival-rate
    		executor: 'constant-arrival-rate',
			// number of requests per second
    		rate: 50,
			// time of execution scenario
    		duration: '30s',
			// number of virtual users (pre-selected before running test)
    		preAllocatedVUs: 50,
			// number of virtual users (can be created during execution of test)
    		maxVUs: 100,
    	},
    },
};

export default function () {
	http.get(''); // set url
}
