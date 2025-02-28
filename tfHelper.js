import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

let net;

export async function analyzeImage(imageFile) {
  if (!net) {
    net = await mobilenet.load();
  }

  const img = document.createElement('img');
  img.src = URL.createObjectURL(imageFile);
  await img.decode();

  const tensor = tf.browser.fromPixels(img);
  const predictions = await net.classify(tensor);
  return predictions;
}
