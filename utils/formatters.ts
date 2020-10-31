export const formatDateToView = (date: string): string =>
  date.replace(' -0300', '');

export const formatDateToGraphql = (date: string): string =>
  date ? `${date} -0300` : '';

export const formatWageToView = (wage: number): string =>
  wage.toFixed(2).toString();

export const formatWageToGraphql = (wage: string): number =>
  parseFloat(wage.replace('R$', '').replace('.', '').replace(',', '.'));
