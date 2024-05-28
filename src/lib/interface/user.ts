export interface User {
  _id?: string;
  userName: string;
  img?: string;
  createdAt?: Date;
  isActive?: boolean;
  password: string;
}
