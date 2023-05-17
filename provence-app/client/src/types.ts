export interface IPosition {
  position: [number, number];
  locationOfTheRestaurant: string;
  adressOfTheRestaurant: string;
}

export interface IPostDish {
  id: string;
  imgSrc: string;
  altImg: string;
  title: string;
  price: any;
}

export interface IUser {
  email: string | null;
  isActivated: boolean;
  id: string | null;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface ILoginOpened {
  isOpened: boolean;
}

export interface IRegistrationOpened {
  isOpened: boolean;
}

export interface ILogin {
  loginForm: {
    isOpened: boolean;
  };
}

export interface IRegistration {
  registrationForm: {
    isOpened: boolean;
  };
}

export interface IAuthUser {
  user: IUser;
  isAuth: boolean;
  error: any;
}

export interface IDish {
  _id: string;
  category?: string;
  imgSrc: string;
  altImg: string;
  title: string;
  price: string;
}

export interface IDishCart {
  _id: string;
  id: string;
  headline: string;
  category?: string;
  imgSrc: string;
  altImg: string;
  title: string;
  price: string;
  _v?: number;
}

export interface IDishData {
  dishesData: {
    dishesAllInfo: {
      dishes: IDish[];
      error: any;
      limit: number;
      page: number;
      total: number;
    };
  };
}

export interface IDishAllInfo {
  dishesAllInfo: {
    dishes: IDish[];
    error: any;
    limit: number;
    page: number;
    total: number;
  };
}

export interface IAllIdDishes {
  [key: string]: number;
}

export interface ISearchValue {
  search: {
    value: string;
  };
}

// export interface IDishesInCart {
//   cart: {
//     dishes: {
//       [key: string]: number;
//     };
//   };
// }

export interface ICart {
  dishes: any;
  error: any;
}
