import { API_URL } from '@/lib/utils';
import { Discussions } from '@/model/discussions';

export function fetchAllDiscussions(): Promise<Discussions[]> {
  const url: string = `${API_URL}/discussions/all`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res as Discussions[];
    });
}
