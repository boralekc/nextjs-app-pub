const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export const cookieAPI = {
    async getCookie() {
        try {
            const response = await fetch(`${API_URL}/cookie`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 0 }
            });
            const { data } = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching cookie:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
    },
};
