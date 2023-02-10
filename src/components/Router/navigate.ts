export const navigate = (url: string) => {
    history.pushState(null, 'title', url);
    window.dispatchEvent(new Event('popstate'));
};
