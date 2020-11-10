import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('tests in useFetchGifs custom hook', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Peru')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return an array of images and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Peru')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(12);
    expect(loading).toBeFalsy();
  });
});
