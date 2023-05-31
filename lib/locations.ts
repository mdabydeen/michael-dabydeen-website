import locations from '../meta/locations.yml'

export type LocationContent = {
  readonly slug: string;
  readonly name: string;
}

const locationMap: { [key: string] : LocationContent } = generateLocationMap() 

function generateLocationMap() : { [key: string]: LocationContent } {
  let result: { [key: string]: LocationContent } = {};

  for (const location of locations.locations) {
    result[location.slug] = location;
  }

  return result;
}

export function getLocation(slug: string) {
  console.log(locationMap[slug])
  return locationMap[slug];
}

export function listLocations(): LocationContent[] {
  return locations.locations;
}