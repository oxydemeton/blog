export function load(params) {
    return {
      search_term: params.url.searchParams.get('search')
    };
  }