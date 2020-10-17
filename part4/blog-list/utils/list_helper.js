const dummy = (blogs) => {
	return 1;
}

const totalLikes = (blogs) => {
	const reducer = (sum, item) => {
	  return sum + item.likes
	}

	return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
	const reducerFn = (prev, current ) => {
		return prev.likes > current.likes ? prev : current
	}

	return blogs.reduce(reducerFn, 0)
}

const mostBlogs = (blogs) => {
	const reducerFn = (prev, current ) => {
		return prev.likes > current.likes ? prev : current
	}

	return blogs.reduce(reducerFn, 0)
}

module.exports = {dummy, totalLikes, favoriteBlog}