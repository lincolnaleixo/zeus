import S from 'fluent-schema'

const countSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('query', S.object()
      .default({}))
}

export default countSchema
