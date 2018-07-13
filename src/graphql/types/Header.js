import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';


const restApiResponse = {

    id: 41,
    slug: "view-menu",
    status: "publish",
    type: "header",
    link: "http://localhost:8080/header/view-menu/",
    title: {
        rendered: "View Menu"
    },
    content: {
        rendered: "Content",
    },

    acf: {
        background_image: "http://localhost:8080/wp-content/uploads/2018/06/burgher.jpg",
        hero_image: "heroimg"
    },
}

export const HeaderTC = composeWithJson('Header', restApiResponse)
export const HeaderGraphQLType = HeaderTC.getType()

export function getHeaderResolvers(baseUrl){
    return {
        headerBy: {
            type: HeaderTC,
            args: {
              id: `Int!`
            },
            resolve: (_, args) =>
              fetch(`${baseUrl}/wp/v2/headers/${args.id}`).then(r => r.json()),
          },
          allHeaders: {
            type: [HeaderTC],
            resolve: () =>
              fetch(`${baseUrl}/wp/v2/headers/`).then(r => r.json()),
          }
    }
}