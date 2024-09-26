const API_URL = process.env.API_URL || "$API_URL";
const API_TOKEN = process.env.API_TOKEN || "$API_TOKEN";

export const sectionAPI = {
    async getSection() {
        try {
            const response = await fetch(`${API_URL}/sections?populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: {revalidate: 0}
            });
            const { data } = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
    },
}