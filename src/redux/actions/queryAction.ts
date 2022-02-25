export function query(searchString: string) {
      console.log(searchString);
      return {
        type: "ADD_QUERY",
        payload: searchString,
      };
    }
    