export default class News {
	static URL = 'http://172.19.101.112:3000';

	static async list(callback, callbackOffline) {
		if (navigator.onLine) {
			const response = await fetch(`${this.URL}/news`);
			const json = response.json();
			const data = await json;
			callback(data);
		} else {
			callbackOffline();
		}
	}
}
