


// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscriber = {
	image: []
}
function setState(prop, data) {
	_state[prop] = data
	_subscriber[prop].forEach(fn => fn())

}

export default class ImageService {
	constructor() {
		console.log("images working")
	}
	getImage() {
		imgApi.get()
			.then(res => {
				let img = res.data.large_url
				setState('image', img)
			})
	}
	addsubscriber(propName, fn) {
		_subscriber[propName].push(fn)
	}
	get Image() {
		return _state['image']
	}
}

