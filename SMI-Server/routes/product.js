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
			desc: item.desc,
			state:item.state
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

//=>修改产品信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $productDATA = req.$productDATA,
		id = parseFloat(req.body.id),
		flag = false;
	delete req.body.id;
	$productDATA = $productDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(id)) {
			flag = true;
			return {
				...item,
				...req.body
			};
		}
		return item;
	});
	if (!flag) {
		res.send(success(false));
		return;
	}
	writeFile('./json/productList.json', $productDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
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
				price:data.price,
				collectState:data.collectState,
				state:data.state
			}
		}));
		return;
	// }
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});



module.exports = route;