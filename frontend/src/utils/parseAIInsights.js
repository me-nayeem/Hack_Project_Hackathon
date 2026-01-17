export const cleanAIMessage = (rawMessage) => {
  if (!rawMessage) return "";

  let cleaned = rawMessage;


  cleaned = cleaned.replace(/\*\*/g, "");

  cleaned = cleaned.replace(/```/g, "");

  const garbageWords = ["adsfdsaf", "sdfaf", "unknown", "N/A"];
  garbageWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    cleaned = cleaned.replace(regex, "");
  });

  cleaned = cleaned.replace(/"(\w+)"\s*field/g, "$1 field");

  cleaned = cleaned.replace(/\n\s*\n/g, "\n\n"); 
  cleaned = cleaned.trim();

  return cleaned;
}

