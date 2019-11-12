import * as types from './store-types';
import {
	queryPhoneList
} from '../api/Home';

export default {
	namespaced: true,
	state: {
        PhoneList:[]
	},
	mutations: {
		[types.PHONE](state, payload) {
            state.PhoneList = payload
		}
	},
	actions: {
		[types.PHONE](context) {
			queryCustomList().then(result => {
				context.commit(types.PHONE, {
					result
				});
			}).catch(() => {});
		}
	}
};