// A mock function to mimic making an async request for data
export function fetchMode(mode = false) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: mode }), 500)
  );
}