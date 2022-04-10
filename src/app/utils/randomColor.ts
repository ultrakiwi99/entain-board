export const randomColor = (): {backgroundColor: string, color: string} => {
  const r = Math.floor((Math.random() * 256) - 1);
  const g = Math.floor((Math.random() * 256) - 1);
  const b = Math.floor((Math.random() * 256) - 1);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  const lightText = ((255 * 299) + (255 * 587) + (255 * 114)) / 1000;
  const darkText = ((0 * 299) + (0 * 587) + (0 * 114)) / 1000;
    
  const backgroundColor = `rgb(${r},${g},${b})`;
  const color = Math.abs(brightness - lightText) > Math.abs(brightness - darkText) ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

  return {backgroundColor, color};
}