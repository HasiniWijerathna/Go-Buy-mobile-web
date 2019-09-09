/**
 * A note for the fellow developers! Glad you made this far!!
 * 
 * This file consits of the dataset that you need to train your reccurent neural network.
 * So we need 90 place types and each place type should contains of data which we need to feed to the 
 * reccurent neural network to progressively train and determine the most appropriate category for
 * each item of the list
 * 
 * 1. How much data should I feeed? Well, Thats up to you. Nahh kiding! If you feed more data,
 * you'll get more accurate results so feed more accurate data as possible.
 * Here's few usefull links,
 * 
 * https://developers.google.com/places/supported_types
 * https://bigquery.cloud.google.com/publicdatasets
 * 
 * 3. React app/circle of PWA feels slow after integrating maching learning ? 
 * Not really, machine learaning would not slow the app it however Revolutionize your app!!
 * Plus it could make your app advanced, so that it could make it slow. 
 * No worries! React can intervene on that,
 * 
 *  You can optimize react performance with the follwing,
 *   I. Reducing wasted renders
 *   II.Long list optimizations -  to control the rendering of long lists
 *   III.Measuring performance with Chrome DevTools
 *
 *  
 * Personally I'm hella impressed at how elegant it is as a solution to classify
 * the items in to most accurate place type and how it grows as it is trained with more data.
 *  
 * I have only used a few features of it, Hope this inspires to use ML into your app
 * Dont get wrong/unnecessary assumption on how complicated ML could be,
 * Just dip your toes in the ML water, there are a lot of AI libraries for JS now!
 * 
 * PS: Hope I didnt bore you with this. Thanks for reading, Cheers!!
 */


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
