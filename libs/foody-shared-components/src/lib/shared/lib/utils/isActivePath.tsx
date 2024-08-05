export const isActivePath = (url: string) => {
  const currentPath = window.location.pathname;

  // If url is '/' and currentPath is '/', return true
  if (url === '/' && currentPath === '/') {
    return true;
  }

  // Check if the currentPath starts with the url and url is not empty
  return url !== '/' && currentPath.startsWith(url);
};
