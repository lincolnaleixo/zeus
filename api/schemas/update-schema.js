import S from 'fluent-schema'

const updateSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('query', S.object()
      .required())
    .prop('update', S.object()
      .required())
    .prop('options', S.object()
      .default({}))
}

export default updateSchema
