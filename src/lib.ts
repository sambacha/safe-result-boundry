import { closest } from './fastest-levenshtein';

export interface XhrError extends Error{
  status: XMLHttpRequest['status'];
  method: string;
  url: string;
};

  export const div = document.getElementById('four-oh-four-suggestion') as HTMLInputElement | null;

  if (div != null) {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const xml = xhr.responseXML;
        // using Non-null assertion operator after `xml`, even though http status code of 200 can provide an empty body whih would be 'undefined'
        const urls = Array.from(xml!.querySelectorAll('urlset > url > loc')).map((el) => el.textContent);
        // `urls as any` is also a fictious typeOf 
        const url = new URL(closest(window.location.href, urls as any));
        div.innerHTML = `<a href="${url.href}">${url.pathname}</a>`;
      } else {
        div.innerHTML = '<a href="/">/</a>';
      }
    };

    xhr.open('GET', `${window.location.protocol}//${window.location.host}/sitemap.xml`);
    xhr.send();


  } else
throw new Error('Err.Boundry Non-200 Status Code');