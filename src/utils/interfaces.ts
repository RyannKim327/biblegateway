export type audio_version = string;
export type version = string;

export interface audio_result {
  result_code: number;
  mp3: string;
  copyright?: string;
}

export interface verse_result {
  book: string;
  verses: string[];
}
