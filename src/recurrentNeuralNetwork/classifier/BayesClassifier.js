const classifyShoppingItem = shoppingItem => {
  classifier.classify(shoppingItem);
  console.log(classifier.classify(shoppingItem));
};

export { classifyShoppingItem };
