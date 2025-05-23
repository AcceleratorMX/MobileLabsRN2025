export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}, ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};