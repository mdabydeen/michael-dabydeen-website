import locations from '../meta/locations.yml'

export type LocationContent = {
  readonly slug: string;
  readonly name: string;
}

const locationMap: { [key: string] : LocationContent } = generateLocationMap() 

function generateLocationMap() : { [key: string]: LocationContent } {
  let result: { [key: string]: LocationContent } = {};

  for (const location of locations.city) {
    result[location.slug] = location;
  }

  return result;
}

export function getLocation(slug: string) {
  return locationMap[slug];
}

export function listLocations(): LocationContent[] {
  return locations.city;
}