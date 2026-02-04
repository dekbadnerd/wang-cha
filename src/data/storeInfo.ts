export interface StoreInfo {
  name: string;
  address: string;
  openingHours: {
    weekdays: string;
    weekend: string;
  };
  phone: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const storeInfo: StoreInfo = {
  name: 'WANGCHA (王茶)',
  address: '123 Serene Street, Heritage District, Bangkok 10200',
  openingHours: {
    weekdays: 'Mon-Fri: 10:00 AM - 8:00 PM',
    weekend: 'Sat-Sun: 9:00 AM - 9:00 PM',
  },
  phone: '+66 2 123 4567',
  mapUrl: 'https://maps.google.com',
  coordinates: {
    lat: 13.7563,
    lng: 100.5018,
  },
};
