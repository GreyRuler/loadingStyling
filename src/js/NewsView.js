import News from './api/News';

export default class NewsView {
	static get selectorNewsContainer() {
		return '.news-container';
	}

	static get selectorReload() {
		return '#reload';
	}

	static get markup() {
		return `
			<div class="news">
				<header>
					<span>Новости мира кино</span>
					<button type="button" id="reload"
					 		class="btn btn-link text-secondary">Обновить</button>
				</header>
				<div class="news-container"></div>
				<div class="offline d-none">
					<span>Не удалось загрузить данные</span>
					<span>Проверьте подключение</span>
					<span>и обновите страницу</span>
				</div>
			</div>
		`;
	}

	static markupNews(data = null) {
		const news = document.createElement('div');
		const title = document.createElement('div');
		const contentContainer = document.createElement('div');
		const preview = document.createElement('div');
		const content = document.createElement('div');
		if (data) {
			title.textContent = data.title;
			preview.style.backgroundColor = data.preview;
			content.textContent = data.content;
		} else {
			news.classList.add('slug');
		}
		news.classList.add('new');
		title.classList.add('title');
		contentContainer.classList.add('d-flex');
		preview.classList.add('preview');
		content.classList.add('content');
		news.append(title, contentContainer);
		contentContainer.append(preview, content);
		return news;
	}

	constructor(element) {
		this.element = element;
	}

	render() {
		this.bindToDOM();
		this.registerEvents();
	}

	bindToDOM() {
		this.element.innerHTML = NewsView.markup;
		const newsContainer = this.element.querySelector(NewsView.selectorNewsContainer);
		newsContainer.append(NewsView.markupNews());
		newsContainer.append(NewsView.markupNews());
		newsContainer.append(NewsView.markupNews());
		this.handleNews();
	}

	registerEvents() {
		const reload = this.element.querySelector(NewsView.selectorReload);
		reload.addEventListener('click', () => {
			this.handleNews();
		});
	}

	handleNews() {
		const newsContainer = this.element.querySelector(NewsView.selectorNewsContainer);
		News.list((data) => {
			newsContainer.innerHTML = '';
			data.news.forEach((news) => {
				newsContainer.append(NewsView.markupNews(news));
			});
		}, () => {
			this.element.querySelector('.offline').classList.toggle('d-none');
		});
	}
}
