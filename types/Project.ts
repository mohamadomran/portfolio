export interface Project {
  _id: string;
  title: string;
  coverImage: {
    source: string;
  };
  date: string;
  url: string;
  description: any;
}
