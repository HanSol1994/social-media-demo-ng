export interface User {
  id: string;
  title?: string; //("mr", "ms", "mrs", "miss", "dr", "")
  firstName: string; //(length: 2-50)
  lastName: string; //(length: 2-50)
  picture?: string; //(url)
  gender?: string; //("male", "female", "other", "")
  email: string;
  dateOfBirth?: string; //(ISO Date - value: 1/1/1900 - now)
  registerDate?: string;
  phone?: string;
  location?: any;
}
