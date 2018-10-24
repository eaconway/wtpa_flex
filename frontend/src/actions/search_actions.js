// The search type can be three options, it can be "Artist", "Parties", "Cities", "All"
export const SEARCH_TYPE = "SEARCH_TYPE";

export const searchType = typeOfSearch => ({
  type: SEARCH_TYPE,
  typeOfSearch
});
