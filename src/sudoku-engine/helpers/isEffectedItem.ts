export const isEffectedItem = (index: number, activeIndex: number) => {
  const mod9 = activeIndex % 9;
  const firstInRow = activeIndex - mod9;
  let firstInSector = Math.floor(activeIndex / 3);
  firstInSector = Math.floor(firstInSector / 9) * 27 + (firstInSector % 3) * 3;
  return (
    index % 9 === mod9 ||
    (index >= firstInRow && index < firstInRow + 9) ||
    (index >= firstInSector && index < firstInSector + 3) ||
    (index >= firstInSector + 9 && index < firstInSector + 12) ||
    (index >= firstInSector + 18 && index < firstInSector + 21)
  );
};
