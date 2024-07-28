export const isActivePath = (url: string) =>
    (window.location.pathname.indexOf(url) === 0 && url.length > 1) ||
    (url === '/' && window.location.pathname === '/');
  