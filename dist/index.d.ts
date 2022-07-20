interface XhrError extends Error {
    status: XMLHttpRequest['status'];
    method: string;
    url: string;
}
declare const div: HTMLInputElement | null;

export { XhrError, div as default, div };
