const express = require('express'),
	route = express.Router();

const {
	success,
	getProductInfo
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');


//=>获取产品列表
route.get('/list', (req, res) => {
	let data = req.$productDATA;
	data = data.map(item => {
		return {
			id: item.id,
			name: item.name,
			desc: item.desc
		}
	});
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>获取产品信息
route.get('/info', (req, res) => {
	let {
		productId = 0
	} = req.query;
	let data = getProductInfo(productId, req);
	// if ('name' in data.data) {
		res.send(success(true, {
			data: {
				id: data.id,
				name: data.name,
				desc: data.desc,
				price:data.price
			}
		}));
		return;
	// }
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});



module.exports = route;