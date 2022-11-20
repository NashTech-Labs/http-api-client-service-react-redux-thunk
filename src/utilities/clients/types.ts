export interface $HttpHeaders {
    [key: string]: string;
}
export declare type $HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';
export interface $FetchOptions {
    body?: string;
    headers?: $HttpHeaders;
    method?: $HttpMethod;
}
export declare type $FetchFunction = (url: string, options: $FetchOptions) => Promise<Response>;

export interface $HttpClientOptions {
    fetch: $FetchFunction;
}

export interface $HttpQuery {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
}

export interface $HttpRequestOptions {
    body?: any;
    endpoint: string;
    headers?: $HttpHeaders;
    method: $HttpMethod;
    query?: $HttpQuery;
}
export interface $HttpResponse<B = any, S = number, O = boolean> {
    body: B;
    headers: $HttpHeaders;
    ok: O;
    request: $HttpRequest;
    status: S;
    statusText: string;
}
export interface $HttpRequest {
    body?: any;
    url: string;
    headers: $HttpHeaders;
    method: $HttpMethod;
}