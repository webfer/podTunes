export interface Podtunes {
  feed: Data;
}

export interface Data {
  author: Author;
  entry: Entry[];
  updated: string;
  rights: string;
  title: string;
  icon: string;
  link: Link[];
  id: string;
}

export interface Author {
  name: string;
  uri: string;
}

export interface Icon {
  label: string;
}
export interface Entry {
  'im:name': Icon;
  'im:image': IImage[];
  summary: Icon;
  'im:price': Price;
  'im:contentType': ImContentType;
  rights?: Icon;
  title: Icon;
  link: Icon;
  id: Id;
  'im:artist': ImArtist;
  category: Category;
  'im:releaseDate': ReleaseDate;
}

export interface Category {
  attributes: CatAttributes;
}

export interface CatAttributes {
  'im:id': string;
  term: PreLabel;
  scheme: string;
  label: PreLabel;
}

export enum PreLabel {
  EntertainmentNews = 'Entertainment News',
  Music = 'Music',
  MusicCommentary = 'Music Commentary',
  MusicHistory = 'Music History',
  MusicInterviews = 'Music Interviews',
}

export interface Id {
  label: string;
  attributes: IdAttributes;
}

export interface IdAttributes {
  'im:id': string;
}

export interface ImArtist {
  label: string;
  attributes?: ImArtistAttributes;
}

export interface ImArtistAttributes {
  href: string;
}

export interface ImContentType {
  attributes: ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
  term: TermPlusLevel;
  label: TermPlusLevel;
}

export enum TermPlusLevel {
  Podtunes = 'Podcast',
}
export interface IImage {
  label: string;
  attributes: IImageAttributes;
}
export interface IImageAttributes {
  height: string;
}

export interface Price {
  label: PriceLabel;
  attributes: PriceAttributes;
}

export interface PriceAttributes {
  amount: string;
  currency: Currency;
}

export enum Currency {
  Usd = 'USD',
}

export enum PriceLabel {
  Get = 'Get',
}

export interface ReleaseDate {
  label: Date;
  attributes: Icon;
}
export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export enum Rel {
  Alternate = 'alternate',
  Self = 'self',
}

export enum Type {
  TextHTML = 'text/html',
}

export interface PodtunesDetail {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: WrapperType;
  kind: Kind;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: Name;
  trackName: string;
  collectionCensoredName?: Name;
  trackCensoredName?: Name;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: Country;
  currency?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  episodeUrl?: string;
  closedCaptioning?: ClosedCaptioning;
  artistIds?: number[];
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  previewUrl?: string;
  episodeFileExtension?: EpFileExtension;
  artworkUrl160?: string;
  episodeContentType?: EpisodeContentType;
}

export enum EpFileExtension {
  Mp3 = 'mp3',
}

export enum ClosedCaptioning {
  None = 'none',
}

export enum Name {
  SwitchedOnPop = 'Switched on Pop',
}

export enum Country {
  Usa = 'USA',
}

export enum EpisodeContentType {
  Audio = 'audio',
}

export interface GenreClass {
  name: PrimaryGenreNameEnum;
  id: string;
}

export enum PrimaryGenreNameEnum {
  MusicCommentary = 'Music Commentary',
}

export enum Kind {
  Podtunes = 'podcast',
  PodtunesEpisode = 'podcast-episode',
}

export enum WrapperType {
  PodtunesEpisode = 'podcastEpisode',
  Track = 'track',
}
