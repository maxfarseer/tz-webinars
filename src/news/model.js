// @flow

export type NewsItem = {|
  id: number,
  text: string,
|}

export type State = {|
  data: ?Array<NewsItem>,
  isLoading: boolean,
  errorMsg: ?string,
|}

// Some utility functions that operates on our model can be placed here
// ...
