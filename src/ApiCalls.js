const rootURL = 'https://listen-api.listennotes.com/api/v2/'

export const getSearchedPodcasts = async (searchValue) => {
  const response = await fetch(`${rootURL}search?q=${searchValue}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0'`);
  if(response.ok) {
		const data = await response.json();
    return data.results;
  } else {
    throw new Error(response.statusText);
  }
}