interface XhrError extends Error {
    status: XMLHttpRequest['status'];
    method: string;
    url: string;
}
declare const div: HTMLElement | null;

export { XhrError, div as default, div };
