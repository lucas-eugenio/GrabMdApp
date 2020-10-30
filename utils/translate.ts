export const translatePaymentMethod = (value: string): string => {
  switch (value) {
    case 'ACCOUNT_DEBIT':
      return 'Débito em Conta';
    default:
      return '';
  }
};

export const translateHireEntity = (value: string): string => {
  switch (value) {
    case 'INDIVIDUAL':
      return 'Pessoa Física';
    case 'LEGAL':
      return 'Pessoa Jurídica';
    case 'BOTH':
      return 'Ambos';
    default:
      return '';
  }
};
