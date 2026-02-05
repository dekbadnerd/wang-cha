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
  address: 'Wireless Road, Lumphini, Patumwan, Bangkok 10330 Thailand',
  openingHours: {
    weekdays: 'Mon-Fri: 10:00 AM - 8:00 PM',
    weekend: 'Sat-Sun: 9:00 AM - 9:00 PM',
  },
  phone: '+66 2 123 4567',
  mapUrl: 'https://maps.google.com',
  coordinates: {
    // One Bangkok location
    lat: 13.727113146625868,
    lng: 100.54724247671565,
  },
};
