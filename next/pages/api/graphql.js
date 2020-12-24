import { ApolloServer, gql } from 'apollo-server-micro'
import cors from 'micro-cors'

import {
  MultiMatchQuery,
  RefinementSelectFacet,
  SearchkitResolvers,
  SearchkitSchema,
  DateRangeFacet
} from '@searchkit/apollo-resolvers'


const searchkitConfig = {
  host : 'http://localhost:9200/' ,
  index : 'noble_prize' ,
  hits : {
    fields : [ 'category' , 'year' , 'entity' , 'name' , 'birthdate' , 'nameLength' , 'birthplace' , 'birthCountry' , 'wiki' , 'motherTongue' , 'ethinic' , 'religion' , 'gender' , 'age' , 'url' , 'qualifications' , 'lastUniversity' , 'residence' , 'organization' , 'field' , 'prizeName' , 'motivation' , 'institution' , 'uniranking' , 'id' ]
  } ,
  sortOptions : [
    { id : 'relevance' , label : "Relevance" , field : [ { "_score" : "desc" } ] , defaultOption : true }
  ] ,
  query : new MultiMatchQuery ( { fields : [ 'category' , 'gender' ] } ) ,
  facets : [

    new RefinementSelectFacet ( {
      field : 'entity' ,
      identifier : 'entity' ,
      label : 'entity'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'name' ,
      identifier : 'name' ,
      label : 'name'
    } ) ,

    new DateRangeFacet ( {
      field : 'birthdate' ,
      identifier : 'birthdate' ,
      label : 'birthdate'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'birthplace' ,
      identifier : 'birthplace' ,
      label : 'birthplace'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'birthCountry' ,
      identifier : 'birthCountry' ,
      label : 'birthCountry'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'wiki' ,
      identifier : 'wiki' ,
      label : 'wiki'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'motherTongue' ,
      identifier : 'motherTongue' ,
      label : 'motherTongue'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'ethinic' ,
      identifier : 'ethinic' ,
      label : 'ethinic'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'religion' ,
      identifier : 'religion' ,
      label : 'religion'
    } ) ,

    new RefinementSelectFacet ( {
      field : 'gender.keyword' ,
      identifier : 'gender' ,
      label : 'gender'
    } ) ,


              new RefinementSelectFacet({
              field: 'url',
              identifier: 'url',
              label: 'url'
            }),

              new RefinementSelectFacet({
              field: 'qualifications',
              identifier: 'qualifications',
              label: 'qualifications'
            }),

              new RefinementSelectFacet({
              field: 'lastUniversity',
              identifier: 'lastUniversity',
              label: 'lastUniversity'
            }),

              new RefinementSelectFacet({
              field: 'residence',
              identifier: 'residence',
              label: 'residence'
            }),

              new RefinementSelectFacet({
              field: 'organization',
              identifier: 'organization',
              label: 'organization'
            }),

              new RefinementSelectFacet({
              field: 'field',
              identifier: 'field',
              label: 'field'
            }),

              new RefinementSelectFacet({
              field: 'prizeName',
              identifier: 'prizeName',
              label: 'prizeName'
            }),

              new RefinementSelectFacet({
              field: 'motivation',
              identifier: 'motivation',
              label: 'motivation'
            }),

              new RefinementSelectFacet({
              field: 'institution',
              identifier: 'institution',
              label: 'institution'
            }),

              new RefinementSelectFacet({
              field: 'uniranking',
              identifier: 'uniranking',
              label: 'uniranking'
            }),
   ]
}

const typeDefs = [
  gql`
    type Query {
      root: String
    }

    type Mutation {
      root: String
    }

      type HitFields {
        category: String
        year: String
        entity: String
        name: String
        birthdate: String
        nameLength: String
        birthplace: String
        birthCountry: String
        wiki: String
        motherTongue: String
        ethinic: String
        religion: String
        gender: String
        age: String
        url: String
        qualifications: String
        lastUniversity: String
        residence: String
        organization: [String]
        field: String
        prizeName: String
        motivation: String
        institution: String
        uniranking: String
        id: String
        
  }

    # extend type Hit {
    #   exampleCustomField: String
    # }
  `,
  SearchkitSchema
]

export const config = {
  api: {
      bodyParser: false
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    ...SearchkitResolvers(searchkitConfig)
    // Hit: {
    //   exampleCustomField: (parent) => `Example Return Value for ${parent.id}`
    // }
  },
  introspection: true,
  playground: true,
  context: {}
})

const handler = server.createHandler({ path: '/api/graphql' })

export default cors()((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res))
