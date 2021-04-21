import { Variables } from "relay-runtime";

const url = "https://graphqlzero.almansi.me/api";

async function fetchGraphQL<T>(
  text: string | undefined | null,
  variables: Variables
): Promise<T> {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
