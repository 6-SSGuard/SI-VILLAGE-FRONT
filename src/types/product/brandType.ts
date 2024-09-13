export interface brandListDataType {
  data: brandResponse[];
}

export interface brandResponse {
  brand_list_type: string;
  brand_index_letter: string;
  brand_name: string;
  brand_name_ko: string;
  ctg_no: string;
}
