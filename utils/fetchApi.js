import axios from "axios";

 

export const baseUrl ='https://bayut.p.rapidapi.com';

export const fetchApi = async (url)=>{
  try {
        const { data } = await axios.get(url, {
          headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "b2f1f667bbmsh4f448b7c45245f8p11894djsnec04dbaac9cc",
          },
        });
      return data;
  } catch (error) {
      console.log(error)
  }

}