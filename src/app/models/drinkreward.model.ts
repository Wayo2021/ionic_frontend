export class ApiResponse {
  status: string;
  message: string;
  data: {
    listCustomers: Customers[];
    listDrink: Drink[];
    listType: Type[];
    listTypes: Types[];
    listSize: Size[];
    listReward: Reward[];
    listRedeem: Redeem[];
  };
}

export class GetDrinkApiResponse {
  status: string;
  message: string;
  data: {
    drink: Drink[];
    types: Types;
  };
}

export class GetRewardApiResponse {
  status: string;
  message: string;
  data: {
    reward: Reward[];
  };
}
export class GetRedeemApiResponse {
  status: string;
  message: string;
  data: {
    redeem: Redeem[];
  };
}

export class GetTypeApiResponse {
  status: string;
  message: string;
  data: {
    type: Types;
  };
}

export class GetTypesApiResponse {
  status: string;
  message: string;
  data: {
    types: Types;
  };
}

export class GetSizeApiResponse {
  status: string;
  message: string;
  data: {
    size: Size;
  };
}

export class Customers {
  cus_id: string;
  cus_first_name: string;
  cus_last_name: string;
  cus_sex: string;
  cus_phone: string;
  cus_email: string;
  cus_password: string;
  image: string;
  cus_status: string;
  tot_id: string;
  cus_point: string;
}

export class Drink {
  drk_id: string;
  drk_name: string;
  drk_price: string;
  drk_detail: string;
  image: string;
  typ_id: string;
  typs_id: string;
  siz_id: string;
  typs_name: string;
  data: any;
}

export class Type {
  typ_id: string;
  typ_name: string;
}

export class Types {
  typs_id: string;
  typs_name: string;
  image: string;
}

export class Size {
  siz_id: string;
  siz_name: string;
}

export class Reward {
  rew_id: string;
  rew_name: string;
  rew_point: string;
  rew_detail: string;
  rew_remain: string;
  image: string;
}

export class Redeem{
  red_id: string;
  red_date: string;
  rew_amount: string;
  cus_id: string;
  rew_id: string;
  poi_id: string;
  emp_id: string;
  red_status: string;
  point_amount: string;
  get_status: string;
}
