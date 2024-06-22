export type AbstractOfDiscussion = {
  id: string;
  guild_id: string;
  start_time: number;
  title: string;
  abst: string;
};

export type DetailOfDiscussion = {
  key:  number;
  speaker_name: string;
  content: string;
}
