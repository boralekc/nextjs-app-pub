const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export const articleAPI = {
    async getArticles() {
        try {
            const response = await fetch(`${API_URL}/articles?populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 0 }
            });
            const { data } = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
        
    },

    async getOneArticle(slug: string) {
        try {
            const response = await fetch(`${API_URL}/articles?filters[slug]=${slug}&populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 0 }
            });
            const { data } = await response.json();
            if (data.length === 0) {
                return null;
              }
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
    },
};
