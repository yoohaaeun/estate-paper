export interface IArea {
  area: string;
  supply_area: string;
  exclusive_area: string;
}

export interface IApartment {
  id: number;
  name: string;
  areas: IArea[];
}

export const aptData: IApartment[] = [
  {
    id: 0,
    name: '엑슬루타워',
    areas: [
      { area: '25', supply_area: '85.02', exclusive_area: '59.79' },
      { area: '39A', supply_area: '129.06', exclusive_area: '93.06' },
      { area: '39B', supply_area: '129.24', exclusive_area: '91.3' },
      { area: '40', supply_area: '134.41', exclusive_area: '95.95' },
      { area: '45', supply_area: '150.2', exclusive_area: '107.5' },
      { area: '49', supply_area: '162.68', exclusive_area: '116.5' },
      { area: '50', supply_area: '165.33', exclusive_area: '118.3' },
      { area: '55', supply_area: '182.41', exclusive_area: '130.89' },
      { area: '62', supply_area: '205.03', exclusive_area: '147.97' },
    ],
  },
  {
    id: 1,
    name: '풍림아이원',
    areas: [
      { area: '25', supply_area: '83.57', exclusive_area: '59.94' },
      { area: '33A', supply_area: '110.13', exclusive_area: '84.93' },
      { area: '33B', supply_area: '111.05', exclusive_area: '84.97' },
      { area: '33C', supply_area: '110.73', exclusive_area: '84.92' },
      { area: '45', supply_area: '154.15', exclusive_area: '122.19' },
      { area: '58', supply_area: '192.96', exclusive_area: '155.93' },
    ],
  },
  {
    id: 2,
    name: '동아풍림',
    areas: [
      { area: '25', supply_area: '82.89', exclusive_area: '59.75' },
      { area: '33', supply_area: '109.97', exclusive_area: '84.36' },
      { area: '46', supply_area: '152.96', exclusive_area: '123.51' },
      { area: '53', supply_area: '176.46', exclusive_area: '144.65' },
      { area: '60', supply_area: '200.73', exclusive_area: '167.26' },
    ],
  },
  {
    id: 3,
    name: '두산위브',
    areas: [
      { area: '7A', supply_area: '23.75', exclusive_area: '15.28' },
      { area: '7B', supply_area: '25.37', exclusive_area: '15.98' },
      { area: '8', supply_area: '28.35', exclusive_area: '18.38' },
      { area: '10A', supply_area: '34.08', exclusive_area: '21.79' },
      { area: '10B', supply_area: '36.16', exclusive_area: '23.92' },
      { area: '11', supply_area: '37.28', exclusive_area: '24.66' },
      { area: '12', supply_area: '41.07', exclusive_area: '27.52' },
      { area: '17', supply_area: '59.24', exclusive_area: '38.96' },
      { area: '26', supply_area: '88.53', exclusive_area: '58.77' },
      { area: '32A', supply_area: '108.52', exclusive_area: '84.77' },
      { area: '32B', supply_area: '110.15', exclusive_area: '84.94' },
      { area: '45', supply_area: '152.06', exclusive_area: '125.87' },
      { area: '53', supply_area: '177.77', exclusive_area: '146.29' },
    ],
  },
  {
    id: 4,
    name: 'SK 뷰',
    areas: [
      { area: '25A', supply_area: '84.68', exclusive_area: '59.99' },
      { area: '25B', supply_area: '83.79', exclusive_area: '59.99' },
      { area: '25C', supply_area: '85.31', exclusive_area: '59.99' },
      { area: '25D', supply_area: '85.28', exclusive_area: '59.99' },
      { area: '35A', supply_area: '118.24', exclusive_area: '84.99' },
      { area: '35B', supply_area: '118.06', exclusive_area: '84.98' },
      { area: '35C', supply_area: '117.7', exclusive_area: '84.99' },
      { area: '39', supply_area: '132.22', exclusive_area: '95.49' },
      { area: '41', supply_area: '138.64', exclusive_area: '100.3' },
      { area: '45', supply_area: '151.16', exclusive_area: '109.21' },
      { area: '47', supply_area: '158.56', exclusive_area: '115.34' },
      { area: '52A', supply_area: '174.33', exclusive_area: '126.7' },
      { area: '52B', supply_area: '174.54', exclusive_area: '127.65' },
      { area: '53A', supply_area: '175.93', exclusive_area: '127.91' },
    ],
  },
  {
    id: 5,
    name: '힐스테이트',
    areas: [
      { area: '29A', supply_area: '97.93', exclusive_area: '73.98' },
      { area: '29B', supply_area: '98.65', exclusive_area: '73.95' },
      { area: '34', supply_area: '112.7', exclusive_area: '84.99' },
    ],
  },
  {
    id: 6,
    name: '장미',
    areas: [
      { area: '18', supply_area: '62.17', exclusive_area: '46.89' },
      { area: '23', supply_area: '78.33', exclusive_area: '66.75' },
      { area: '27', supply_area: '90.81', exclusive_area: '77.43' },
      { area: '32A', supply_area: '106.41', exclusive_area: '90.78' },
      { area: '32B', supply_area: '106.41', exclusive_area: '84.78' },
      { area: '32C', supply_area: '106.36', exclusive_area: '90.73' },
    ],
  },
];
