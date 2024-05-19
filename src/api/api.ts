const BASE_URL = "http://localhost:5000/api";

function _handleError(res: Response) {
  return res.ok ? res : Promise.reject(res.statusText);
}
function _handleContentType(res: Response) {
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }
  return Promise.reject("Haven't got JSON!");
}

function get<T>(endpoint: string): Promise<T> {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then(_handleError)
    .then(_handleContentType)
    .catch((error) => {
      throw error;
    });
}

function post<T>(endpoint: string, body: any): Promise<T> {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  })
    .then(_handleError)
    .then(_handleContentType)
    .catch((error) => {
      throw error;
    });
}

export default {
  get,
  post,
};
