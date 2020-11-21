
export interface Challenge {
  node: Node
  title: Title;
  teaser: Teaser;
  span: any[];
  logo: Logo;
  alt:null;
  copyright: null;
  url: string
}
export interface Node {
  title: Title;
  teaser: Teaser;
  span: any[];
  logo: Logo;
  alt:null;
  copyright: null;
  url: string
}
export interface Title {
  type: string;
  text: string;
  spans: any[]
}

export interface Teaser {
  type: string;
  text: string;
  spans: any[]
}
export interface Logo {
 dimensions: Dimensions
}
export interface Dimensions {
  width: number;
  height: number;
}
