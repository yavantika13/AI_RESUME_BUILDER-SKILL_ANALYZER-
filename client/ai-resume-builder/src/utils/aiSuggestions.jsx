export function suggestExperience(text) {
  if (!text) return "";

  return text
    .split("\n")
    .map(line =>
      line.startsWith("•")
        ? line
        : `• Worked on ${line} using modern tools and best practices`
    )
    .join("\n");
}

export function suggestSkills(existingSkills) {
  const commonSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Critical Thinking"
  ];

  return [...new Set([...existingSkills, ...commonSkills.slice(0, 2)])];
}
