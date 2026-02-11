export const getThemeByProgress = (progress) => {
  if (progress === 100) {
    return { color: "green", class: "bg-green-600" };
  }

  if (progress >= 66) {
    return { color: "blue", class: "bg-blue-600" };
  }

  if (progress >= 34) {
    return { color: "orange", class: "bg-orange-500" };
  }

  return { color: "red", class: "bg-red-500" };
};
