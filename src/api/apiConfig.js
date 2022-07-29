const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f6c0b7382cd424f48fee527e28af8b89',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;