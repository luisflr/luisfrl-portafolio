import { HEADERS } from "./constants";

export async function getProjects(url) {
  let response;
  try {
    response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    }).then( res => res.json())  
  } catch (error) {
    console.error('Error:', error)
  }
  

  return response;
}