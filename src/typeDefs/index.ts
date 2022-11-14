interface Comment {
  id: number;
  message: string;
  user: User;
  createdAt: Date;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export default interface Blog {
  title: string;
  body: string;
  id: number;
  createdAt: Date;
  user: User;
  comments: Comment[];
}
