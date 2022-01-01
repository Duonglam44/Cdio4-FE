export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export enum AllStatus {
  INACTIVE = 0,
  ACTIVE = 1,
  PENDING = 2,
  BANNED = 10,
  DRAFT = 20,
}

export enum StatusColor {
  INACTIVE = '#d45333',
  ACTIVE = '#33d44b',
  PENDING = '#ffc107',
  BANNED = '#db0700',
  DRAFT = '#ffc107',
}

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  // tslint:disable-next-line: use-isnan
  value === NaN ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value === '') ||
  (Array.isArray(value) && value.length === 0)
