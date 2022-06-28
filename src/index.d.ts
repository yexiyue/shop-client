declare interface SwiperChangeObject {
  type: string;
  timeStamp: number;
  target: Target;
  currentTarget: Target;
  detail: Detail;
}

declare interface Detail {
  current: number;
  currentItemId: string;
  source: string;
}

declare interface Target {
  id: string;
  dataset: Dataset;
  offsetTop: number;
  offsetLeft: number;
}

declare interface Dataset {
  'v-1badc801': string;
  v1badc801: string;
}