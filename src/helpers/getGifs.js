export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=vDERZqeeaTJIuVeRgTOJXeD4q3yqUBxJ`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((image) => {
    return {
      id: image.id,
      title: image.title,
      url: image.images.downsized_medium.url,
    };
  });
  return gifs;
};
