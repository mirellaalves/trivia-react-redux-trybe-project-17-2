const makeURL = (base, args) => (
  Object.entries(args).reduce((url, [setting, value]) => (
    url += `&${setting}=${value}`
  ), base)
);

const fetchQuestionsAPI = async (args, qnt = 5) => {
  const url = makeURL(`https://opentdb.com/api.php?amount=${qnt}`, args);
  return fetch(url)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
};

export default fetchQuestionsAPI;
