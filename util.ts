export const randomLesbianColor = (): number => {
  const colors = [
    0xD52D00,
    0xEF7627,
    0xFF9A56,
    0xFFFFFF,
    0xD162A4,
    0xB55690,
    0xA30262,
  ];
  return colors[Math.floor(Math.random() * 6)];
};
