import S from 'fluent-schema'

const readSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('query', S.object()
      .default({}))
    .prop('projection', S.object()
      .default({}))
    .prop('limit', S.number()
      .default(0))
    .prop('skip', S.number()
      .default(0))
}

export default readSchema
