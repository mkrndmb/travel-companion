import axios from "axios";

export const getPlaces = async (type, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "bafba5e9dfmsh459d164a94cf571p1f7481jsn8f06ec5a0ec7"
        }
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
