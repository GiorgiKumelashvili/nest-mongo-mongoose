export function fields<T>() {
  return new Proxy(
    {},
    {
      get: function (_target, prop) {
        return prop;
      },
    },
  ) as {
    [P in keyof T]: P;
  };
}

export function fieldJoin(...args: string[]) {
  return args.join('.');
}
