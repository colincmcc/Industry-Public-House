import  { TypeComposer } from 'graphql-compose';

export function createFindByIdResolver(tc: TypeComposer, urlAddr: string): void {
  tc.addResolver({
    name: 'findById',
    type: tc,
    args: {
      id: 'Int!',
    },
    resolve: async rp => {
      return rp.context.loader.load(`https://swapi.co/api/${urlAddr}/${rp.args.id}/`);
    },
  });
}