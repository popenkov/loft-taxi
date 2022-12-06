import { transliterate } from '../../utils/transliterate';

export const addressListMapper = (add) => {
  return add.map((item) => {
    return {
      value: transliterate(item),
      label: item,
    };
  });
};
