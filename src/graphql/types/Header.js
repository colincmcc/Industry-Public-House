import composeWithJson from 'graphql-compose-json'
import {
    createFindByIdResolver,
    createFindByUrlListResolver,
    createFindAllResolver,
    createFindByIdListResolver,
    createFindByMetaResolver
  } from '../utils';

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

const HeaderTC = composeWithJson('Header', restApiResponse)
export const HeaderGraphQLType = HeaderTC.getType()

createFindByIdResolver(HeaderTC, 'headers')
createFindByUrlListResolver(HeaderTC)
createFindAllResolver(HeaderTC, 'headers')
createFindByIdListResolver(HeaderTC, 'headers')

export function getHeaderResolvers(){
    return {
        headerById: HeaderTC.getResolver('findById'),
        allHeaders: HeaderTC.getResolver('findAll'),
    }
}

export default HeaderTC