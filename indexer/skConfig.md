

First setup your indices

```json
PUT /noble_prize

{}

```

Then push your indices mapping file. This will define the field types within your document.

```json
PUT /noble_prize/_mapping

{
  "mappings": {
    "properties": {
      "category": {
        "type": "text"
      },
      "year": {
        "type": "integer"
      },
      "entity": {
        "type": "keyword"
      },
      "name": {
        "type": "keyword"
      },
      "birthdate": {
        "type": "date"
      },
      "nameLength": {
        "type": "keyword"
      },
      "birthplace": {
        "type": "keyword"
      },
      "birthCountry": {
        "type": "keyword"
      },
      "wiki": {
        "type": "keyword"
      },
      "motherTongue": {
        "type": "keyword"
      },
      "ethinic": {
        "type": "keyword"
      },
      "religion": {
        "type": "keyword"
      },
      "gender": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "age": {
        "type": "integer"
      },
      "url": {
        "type": "keyword"
      },
      "qualifications": {
        "type": "keyword"
      },
      "lastUniversity": {
        "type": "keyword"
      },
      "residence": {
        "type": "keyword"
      },
      "organization": {
        "type": "keyword"
      },
      "field": {
        "type": "keyword"
      },
      "prizeName": {
        "type": "keyword"
      },
      "motivation": {
        "type": "keyword"
      },
      "institution": {
        "type": "keyword"
      },
      "uniranking": {
        "type": "keyword"
      },
      "id": {
        "type": "keyword"
      }
    }
  }
}
```

Then setup Searchkit. Below is a configuration based on your settings.

```javascript
  const searchkitConfig = {
    host: 'https://l1fc6g6ov4:z146wupnkh@dogwood-190374675.eu-west-1.bonsaisearch.net:443',
    index: 'noble_prize',
    hits: {
      fields: ['category','year','entity','name','birthdate','nameLength','birthplace','birthCountry','wiki','motherTongue','ethinic','religion','gender','age','url','qualifications','lastUniversity','residence','organization','field','prizeName','motivation','institution','uniranking','id']
    },
    sortOptions: [
      { id: 'relevance', label: "Relevance", field: [{"_score": "desc"}], defaultOption: true}
    ],
    query: new MultiMatchQuery({ fields: ['category','gender'] }),
    facets: [
      
      new RefinementSelectFacet({
        field: 'entity',
        identifier: 'entity',
        label: 'entity'
      }),
          
      new RefinementSelectFacet({
        field: 'name',
        identifier: 'name',
        label: 'name'
      }),
          
      new DateRangeFacet({
        field: 'birthdate',
        identifier: 'birthdate',
        label: 'birthdate'
      }),
          
      new RefinementSelectFacet({
        field: 'birthplace',
        identifier: 'birthplace',
        label: 'birthplace'
      }),
          
      new RefinementSelectFacet({
        field: 'birthCountry',
        identifier: 'birthCountry',
        label: 'birthCountry'
      }),
          
      new RefinementSelectFacet({
        field: 'wiki',
        identifier: 'wiki',
        label: 'wiki'
      }),
          
      new RefinementSelectFacet({
        field: 'motherTongue',
        identifier: 'motherTongue',
        label: 'motherTongue'
      }),
          
      new RefinementSelectFacet({
        field: 'ethinic',
        identifier: 'ethinic',
        label: 'ethinic'
      }),
          
      new RefinementSelectFacet({
        field: 'religion',
        identifier: 'religion',
        label: 'religion'
      }),
          
      new RefinementSelectFacet({
        field: 'gender.keyword',
        identifier: 'gender',
        label: 'gender'
      }),
          
      new RangeFacet({
        field: 'age',
        identifier: 'age',
        label: 'age'
        range: {
          min: <MIN>,
          max: <MAX>,
          interval: <internal>
        }
      }),
          
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
```

and update the graphql schema hitFields type. Each field type is declared as a string but you may need to update the field depending on how its stored in elasticsearch. It may be:
- a date
- an array of strings
- a number

```gql
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
  organization: String
  field: String
  prizeName: String
  motivation: String
  institution: String
  uniranking: String
  id: String
  
}
```

  