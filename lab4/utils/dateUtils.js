export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('uk-UA', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};