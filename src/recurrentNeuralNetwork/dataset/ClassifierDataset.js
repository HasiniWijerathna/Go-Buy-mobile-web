/**
 * Defines the string array of places data for category 'accounting'
 */
const accounting = ["statement", "accounting", "invoice", "deposit"];

/**
 * Defines the string array of places data for category 'airport'
 */
const airport = ["runway", "airport", "terminal", "landing"];

/**
 * Defines the string array of places data for category 'amusement_park'
 */
const amusement_park = ["roller coaster", "carousel", "coney island"];

/**
 * Defines the string array of places data for category 'aquarium'
 */
const aquarium = ["fish", "goldfish", "vivarium", "shark", "fish tank"];

/**
 * Returns traning places data
 * @return {Array} The fetached places data
 */
const fetchTrainData = placeType => {
  let trainData = [];
  switch (placeType) {
    case "accounting":
      trainData = [...accounting];
      break;
    case "airport":
      trainData = [...airport];
      break;
    case "amusement_park":
      trainData = [...amusement_park];
      break;
    case "aquarium":
      trainData = [...aquarium];
      break;
  }
  return trainData;
};

export { fetchTrainData };
