export const getObjectKeys = <T extends Record<string, unknown>>(target: T): (keyof T)[] =>
  Object.keys(target) as (keyof T)[]
