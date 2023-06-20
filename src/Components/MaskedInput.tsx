export const typePhoneNumber = (value: string) => {
  if (value[0] === "0") {
    return { fristTick: 3, lastTick: 6, numberLength: 10 };
  } else {
    return { fristTick: 2, lastTick: 5, numberLength: 9 };
  }
};

export const FormantPhoneNumber = (
  value: string,
  firstTick: number,
  lastTick: number,
  numberLegth: number
) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < firstTick + 1) return phoneNumber;
  if (phoneNumberLength < lastTick + 1) {
    return `${phoneNumber.slice(0, firstTick)}-${phoneNumber.slice(firstTick)}`;
  }
  if (phoneNumberLength < numberLegth + 1) {
    return `${phoneNumber.slice(0, firstTick)}-${phoneNumber.slice(
      firstTick,
      lastTick
    )}-${phoneNumber.slice(lastTick, numberLegth)}`;
  } else {
    return phoneNumber;
  }
};
