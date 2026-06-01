export const shouldShowField = (field, values) => {
  if (!field) return true;
  if (field.hidden) return false;
  if (!field.showWhen) return true;

  const { field: dep, equals } = field.showWhen;
  return values?.[dep] === equals;
};
