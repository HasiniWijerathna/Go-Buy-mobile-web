import natural from "natural";
import { fetchTrainData } from "../dataset/ClassifierDataset";

const classifier = new natural.BayesClassifier();

const trainNeuralNetClassifier = shoppingItem => {
  classifier.addDocument(fetchTrainData("accounting"), "accounting");
  classifier.addDocument(fetchTrainData("airport"), "airport");
  classifier.addDocument(fetchTrainData("amusement_park"), "amusement_park");
  classifier.addDocument(fetchTrainData("aquarium"), "aquarium");

  classifier.train();

  classifier.classify(shoppingItem);
  console.log(classifier.classify(shoppingItem));
};

export { trainNeuralNetClassifier };
