import S from 'fluent-schema'

const deleteSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('query', S.object()
      .required())
}

export default deleteSchema
