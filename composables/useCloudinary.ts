export function useCloudinary(url?: string, options = 'f_auto,q_auto') {
    if (!url) return '';
    return url.replace('/upload/', `/upload/${options}/`);
}