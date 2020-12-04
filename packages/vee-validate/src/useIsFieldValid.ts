import { computed } from 'vue';
import { FormSymbol } from './symbols';
import { injectWithSelf } from './utils';

/**
 * If a field is validated and is valid
 */
export function useIsFieldValid(path: string) {
  const form = injectWithSelf(FormSymbol);

  return computed(() => {
    return form?.fields.value[path]?.meta.valid as boolean | undefined;
  });
}
