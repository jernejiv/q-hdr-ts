export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface NavigationLink {
  name: string;
  icon: string;
  routeTo: string;
}
