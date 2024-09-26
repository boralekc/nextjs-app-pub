const API_URL = process.env.API_URL || "$API_URL";
const API_TOKEN = process.env.API_TOKEN || "$API_TOKEN";

export const categoryAPI = {
    async getCategories() {
        try {
            const response = await fetch(`${API_URL}/categories?populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: {revalidate: 0}
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

    async getOneCategory(slug: string) {
        try {
            const response = await fetch(`${API_URL}/categories?filters[slug]=${slug}&populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 0 }
            });
            const { data } = await response.json();
            if (!data || !Array.isArray(data) || data.length === 0) {
                return null;
              }
            return data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },
    
};
