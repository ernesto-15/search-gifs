import { getGifs } from '../../helpers/getGifs';

describe('tests in getGifs helper', () => {
  test('should fetch 12 elements', async () => {
    const gifs = await getGifs('Rick and Morty');
    expect(gifs.length).toBe(12);
  });
  test('should fetch 0 elements if category is not given', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
