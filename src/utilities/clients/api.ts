import { $FetchFunction, $HttpClientOptions, $HttpRequestOptions } from "./types";

export class $HttpClient {
    private customFetch;
  
    constructor(customFetch: $FetchFunction) {
      this.customFetch = customFetch;
    }
  
    public request(options: $HttpRequestOptions){
      const origin = 'https://jsonplaceholder.typicode.com'
  
      const finalUrl = origin + options.endpoint
  
      const finalHeaders = {
        accept: 'application/json',
        'content-type': 'application/json',
        ...options.headers,
      };
  
      const request = {
        body: options.body,
        headers: finalHeaders,
        method: options.method,
        url: finalUrl,
      };

      console.log(request);
  
      return this.customFetch(request.url, {
        body: JSON.stringify(request.body),
        headers: request.headers,
        method: request.method,
      }).then((response) => {
        return (response.json()).then((json) => {
          return {
            body: json,
            headers: response.headers,
            ok: response.ok,
            request,
            status: response.status,
            statusText: response.statusText,
          };
        });
      });
    }
  }

export class $Resource {
    protected client: $HttpClient;
    constructor(fetchWithAuth: $FetchFunction) {
        this.client = new $HttpClient(fetchWithAuth);
    }
}

export class PostsResource extends $Resource {
    public get() {
      return this.client.request({
        endpoint: `/posts`,
        method: 'GET',
      });
    }
  
    public getById(param: { id: string }) {
      return this.client.request({
        endpoint: `/posts/${param.id}`,
        method: 'GET',
      });
    }
  
    public post(params: { title: string, body: string, userId: number }) {
        console.log(params);
      return this.client.request({
        body: params,
        endpoint: `/posts`,
        method: 'POST',
      });
    }
  
    public put(params: { title: string, body: string, userId: number, id: number }) {
      return this.client.request({
        body: params.body,
        endpoint: `/posts/${params.id}`,
        method: 'PUT',
      });
    }
  }
export class ApiClient {
    postsResource: PostsResource;
  
    constructor(fetchWithAuth: $FetchFunction) {
      this.postsResource = new PostsResource(fetchWithAuth);
    }
}
// export const createClient = (options: $HttpClientOptions): ApiClient => new ApiClient(options);
