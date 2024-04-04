import { HEADERS, URI } from "./constants";

export async function get(url) {
  let response;
  try {
    response = await fetch(`${URI}${url}`, {
      method: 'GET',
      headers: HEADERS,
    }).then( res => res.json())  
  } catch (error) {
    console.error('Error:', error)
  }
  

  return response;
}