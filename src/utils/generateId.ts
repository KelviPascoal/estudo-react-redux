export function generateId() {
  const timestamp = new Date().getTime();

  const randomNum = Math.floor(Math.random() * 1000) + 1;

  const generatedId = `${timestamp}-${randomNum}`;

  return generatedId;
}
