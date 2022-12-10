export class ApiRequest {
  cus_phone: string;
  cus_password: string;
}

export class ApiResponse {
  status: string;
  message: string;
  data: {
    customers: Customers;
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
  tot_id: string;
  cus_status: string;
  cus_point: string;
}

