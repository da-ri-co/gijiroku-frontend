import { API_URL } from '@/lib/utils';
import {
  AbstractOfDiscussion,
  DetailOfDiscussion,
} from '@/model/abstractOfDiscussion';

export function fetchAllDiscussions(): Promise<AbstractOfDiscussion[]> {
  const url: string = `${API_URL}/discussions/all`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res as AbstractOfDiscussion[];
    });
}

export function fetchDiscussionById(id: string): Promise<DetailOfDiscussion[]> {
  const url: string = `${API_URL}/discussions/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res as DetailOfDiscussion[];
    });
}
