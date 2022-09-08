export interface XhrError extends Error {
    status: XMLHttpRequest['status'];
    method: string;
    url: string;
}
export declare const div: HTMLInputElement | null;
