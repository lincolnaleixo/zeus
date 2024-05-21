import S from 'fluent-schema'

const createSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('document', S.object()
      .required())
}

export default createSchema
