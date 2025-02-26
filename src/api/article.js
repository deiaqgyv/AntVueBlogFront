import _request from '@/utils/request'

export function fetchArticle (params) {
	return _request.get('/articles', params)
}

export function getArticleDetail (id) {
	return _request.get(`/articles/${id}`)
}

export function getArticlesByTag (id) {
	return _request.get(`/articles/tags/${id}`)
}

export function getArticlesByCategory (id) {
	return _request.get(`/articles/category/${id}`)
}


