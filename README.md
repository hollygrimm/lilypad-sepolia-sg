# Lilypad Sepolia Subgraph

This subgraph indexes Lilypad Storage events on the Sepolia network.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Generate types from schema:
   ```bash
   npm run codegen
   ```

3. Build the subgraph:
   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm run test
   ```

5. Deploy the subgraph:
   ```bash
   npm run deploy
   ```

## Deployment

The subgraph is currently deployed at:
```
https://api.studio.thegraph.com/query/57464/lilypad-arbitrum-sepolia/v0.0.1
```

## Example Query

```graphql
{
  jobs(first: 5, orderBy: timestamp, orderDirection: desc) {
    id
    status
    timestamp
    input
    output
  }
}
```

## Schema

The subgraph tracks the following entities:

- Jobs: Records of all Lilypad computation jobs
- Results: Storage of job results and outputs

For detailed schema information, see `schema.graphql`.

## Development

To modify the subgraph:

1. Update `schema.graphql` as needed
2. Run codegen to update types
3. Modify mappings in `src/lilypad-storage.ts`
4. Build and deploy

## License

MIT License