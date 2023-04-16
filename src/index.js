import './js/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/slug.css';
import './css/new.css';
// Точка входа webpack
// Не пишите код в данном файле

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js');
	});
}
