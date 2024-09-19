export interface topCategoryType {
  categoryCode: string;
  categoryName: string;
  depth: string;
}

export interface CategorySideProps {
  categories: topCategoryType[];
}

export interface middleCategoryType {
  middleCategoryCode: string;
  middleCategoryName: string;
  middleCategoryDescription: string;
  topCategoryCode: string;
}

export interface bottomCategoryType {
  bottomCategoryCode: string;
  bottomCategoryName: string;
  bottomCategoryDescription: string;
  middleCategoryCode: string;
}
