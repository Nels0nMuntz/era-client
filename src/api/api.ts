const BASE_URL = process.env.API_URL;

async function _handleError(res: Response) {
  const json = await res.json();
  return res.ok ? json : Promise.reject(json);
}
function _handleContentType(res: Response) {
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res;
  }
  return Promise.reject("Haven't got JSON!");
}

function get<T>(endpoint: string): Promise<T> {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then(_handleContentType)
    .then(_handleError)
    .catch((error) => {
      throw error;
    });
}

function post<T>(endpoint: string, body: any): Promise<T> {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then(_handleContentType)
    .then(_handleError)
    .catch((error) => {
      throw error;
    });
}

export default {
  get,
  post,
};
