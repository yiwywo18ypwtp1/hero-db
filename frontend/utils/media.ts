export const getImageUrl = (path?: string): string => {
    return path ? `${process.env.NEXT_PUBLIC_API_URL}${path}` : "";
}