import { type SchemaTypeDefinition } from 'sanity'
import Experience from './Experience'
import projects from './projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experience, projects],
}
