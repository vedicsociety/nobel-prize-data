import React from 'react'
import { EuiFlexGrid, EuiFlexItem, EuiCard, EuiFlexGroup, EuiTitle, EuiText } from '@elastic/eui'

export const HitsGrid = ({ data }) => (
  <EuiFlexGrid gutterSize="l">
    {data?.results.hits.items.map((hit) => (
      <EuiFlexItem key={hit.id} grow={2}>
        <EuiCard
          grow={false}
          textAlign="left"
          image={<img src={hit.fields.url} style={{ maxWidth: 200 }} alt="Nature" />}
          title={hit.fields.name}
          description={hit.fields.plot}
        />
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
)

export const HitsList = ({ data }) => (
  <>
    {data?.results.hits.items.map((hit) => (
      <EuiFlexGroup gutterSize="xl" key={hit.id}>
        <EuiFlexItem>
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <img src={hit.fields.url} alt="Nature" style={{ height: '150px' }} />
            </EuiFlexItem>
            <EuiFlexItem grow={4}>
              <EuiTitle size="xs">
                <h6>{hit.fields.name}</h6>
              </EuiTitle>
              <EuiText grow={false}>
                <p>{hit.fields.prizeName}</p>
              </EuiText>
              <EuiText grow={false}>
                <p>{hit.fields.motivation}</p>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={2}>
              <EuiText grow={false}>
                <ul>
                  <li>
                    <b>Organization: </b>
                    {hit.fields.organization}
                  </li>

                  <li>
                    <b>Institution: </b>
                    {hit.fields.institution}
                  </li>
                </ul>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    ))}
  </>
)
