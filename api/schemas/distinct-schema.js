import S from 'fluent-schema'

const distinctSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('field', S.string()
      .required())
    .prop('query', S.object()
      .default({}))
}

export default distinctSchema
