export class API_SERVICE {
  static getNoteList({ callback, start = 0, limit = 30 }) {
    const url = `${process.env.REACT_APP_API_COMPANIES_URL}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        callback(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  static async getNoteListAsync({ start = 0, limit = 30 }) {
    const url = `${process.env.REACT_APP_API_COMPANIES_URL}`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (err) {}
  }
}

export default API_SERVICE;
