//handler.js:

import fastFoodItems from './fast-food-items';

export default function handler(req, res) {
  res.status(200).json(fastFoodItems);
}
