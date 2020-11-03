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

export const translateStatus = (value: string): string => {
  switch (value) {
    case 'IN_PROGRESS':
      return 'Em Progresso';
    case 'ACCEPTED':
      return 'Aceito';
    case 'REFUSED':
      return 'Recusado';
    default:
      return '';
  }
};
