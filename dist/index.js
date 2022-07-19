import { closest } from 'fastest-levenshtein/dist';
;
export const div = document.getElementById('four-oh-four-suggestion');
if (div) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const urls = Array.from(xml.querySelectorAll('urlset > url > loc')).map((el) => el.textContent);
            const url = new URL(closest(window.location.href, urls));
            div.innerHTML = `<a href="${url.href}">${url.pathname}</a>`;
        }
        else {
            div.innerHTML = '<a href="/">/</a>';
        }
    };
    xhr.open('GET', `${window.location.protocol}//${window.location.host}/sitemap.xml`);
    xhr.send();
}
else
    throw new Error('Err.Boundry Non-200 Status Code');
export default div;
