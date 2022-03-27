export interface User {
  id: string;
  title: string; //("mr", "ms", "mrs", "miss", "dr", "")
  firstName: string; //(length: 2-50)
  lastName: string; //(length: 2-50)
  picture: string; //(url)
}
