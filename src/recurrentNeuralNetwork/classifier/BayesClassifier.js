import natural from "natural";
import { fetchTrainData } from "../dataset/ClassifierDataset";

/**
 * Initiatialization of the BayesClassifier
 */
const classifier = new natural.BayesClassifier();

/**
 * Train the recurrent neural network to classify the fetched items
 * @param {string} shoppingItem
 */
const trainNeuralNetClassifier = shoppingItem => {
  // Passing the relevant google places type to the classifier to train the neural net
  classifier.addDocument(fetchTrainData("accounting"), "accounting");
  classifier.addDocument(fetchTrainData("airport"), "airport");
  classifier.addDocument(fetchTrainData("amusement_park"), "amusement_park");
  classifier.addDocument(fetchTrainData("aquarium"), "aquarium");

  // Train the classifier
  classifier.train();

  // Classify the added shopping item by the trained reccurent neural net
  classifier.classify(shoppingItem);

  console.log(classifier.classify(shoppingItem));
};

export { trainNeuralNetClassifier };
