// The search type can be three options, it can be "Artist", "Parties", "Cities", "All"
export const SEARCH_TYPE = "SEARCH_TYPE";

// Need a search to be of multiple types. Party, City,
// or event search
export const searchType = typeOfSearch => ({
  type: SEARCH_TYPE,
  typeOfSearch
});
