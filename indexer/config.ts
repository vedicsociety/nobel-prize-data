import noble_prize_winner from './noble_prize_winner.json'
import { withConfig, toNumber, splitComma, toDate } from '@searchkit/cli'


withConfig({
	index: 'noble_prize',
	host: "http://localhost:9200/",
  source: noble_prize_winner,
  type: 'prize_winner',
	fields: [
		{
			fieldName: 'category',
			stored: true,
      searchable: true,
			sourceOptions: {
				path: 'Category'
			}
    },
		{
			fieldName: 'year',
			stored: true,
			type: 'integer',
			sourceOptions: {
              path: 'Year'
			}
		},
    {
      fieldName: 'entity',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Entity'
      }
    },
    {
      fieldName: 'name',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Name'
      }
    },
    {
			fieldName: 'birthdate',
			stored: true,
      facet: true,
      searchable: false,
			type: 'date',
			sourceOptions: {
				path: 'BirthDate',
				transform: toDate("dd MMM yyyy")
			}
    },
    {
			fieldName: 'nameLength',
			stored: true,
			sourceOptions: {
				path: 'LengthofName'
			}
    },
    {
      fieldName: 'birthplace',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'BirthPlace'
      }
    },

    {
      fieldName: 'birthCountry',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'BirthCountry'
      }
    },
    {
      fieldName: 'wiki',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Wikipedia'
      }
    },
    {
      fieldName: 'motherTongue',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'MotherTongue'
      }
    },
    {
      fieldName: 'ethinic',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Ethinic'
      }
    },
    {
      fieldName: 'religion',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'religion'
      }
    },
    {
      fieldName: 'gender',
      stored: true,
      facet: true,
      searchable: true,
      sourceOptions: {
        path: 'Gender'
      }
    },
    {
      fieldName: 'age',
      stored: true,
      facet: true,
      type: 'integer',
      sourceOptions: {
        path: 'Age'
      }
    },
    {
      fieldName: 'url',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'URLPhoto'
      }
    },
    {
      fieldName: 'qualifications',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Qualification'
      }
    },

    {
      fieldName: 'lastUniversity',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'LastUniversity'
      }
    },

    {
      fieldName: 'residence',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Residence'
      }
    },
    {
      fieldName: 'organization',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Organization',
        transform: splitComma
      }
    },
    {
      fieldName: 'field',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Field'
      }
    },
    {
      fieldName: 'prizeName',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'PrizeName'
      }
    },
    {
      fieldName: 'motivation',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Motivation'
      }
    },

    {
      fieldName: 'institution',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'Institution'
      }
    },
    {
      fieldName: 'uniranking',
      stored: true,
      facet: true,
      searchable: false,
      sourceOptions: {
        path: 'University Ranking'
      }
    },

		{
			fieldName: 'id',
			stored: true,
			sourceOptions: {
				path: 'ID'
			}
    }
	]
})
