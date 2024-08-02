export interface GoogleGeocodingInfo {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export interface GoogleGeocodingResponse {
  results: GoogleGeocodingInfo[];
  status: string;
}
