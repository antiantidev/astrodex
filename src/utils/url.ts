export function getRelativeUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If path already starts with baseUrl, don't prepend it again
  if (cleanPath.startsWith(baseUrl) && baseUrl !== '') {
    return cleanPath;
  }
  
  return `${baseUrl}${cleanPath}`;
}
