export class ApiResponse {
  status: string;
  message: string;
  data: {
    listCustomers: Customers[];
    listPoint_total: Point_total[];
  };
}

//ข้อมูลลูกค้า
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

export class Point_total {
  tot_id: string;
  tot_date: string;
  tot_point: string;
  cus_phone: string;
}

//เรียกข้อมูลลูกค้า
export class GetCustomersApiResponse {
  status: string;
  massage: string;
  data: {
    customers: Customers;
  };
}
export class GetPoint_totalApiResponse {
  status: string;
  massage: string;
  data: {
    point_total: Point_total[];
  };
}
