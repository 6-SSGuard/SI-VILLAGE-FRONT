export interface eventListDataType {
  eventListCnt: number;
  isLast: boolean;
  page: number;
  data: eventCardDataType[];
}

export interface eventCardDataType {
  id: number;
  eventImageUrl: string;
  brandName: string;
  eventName: string;
  eventTitle: string;
  badgeList: string[];
}
