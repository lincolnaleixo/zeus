import S from 'fluent-schema'

const upsertSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('document', S.object()
      .required())
    .prop('uniqueKey', S.string()
      .required()) // Specify the field to be used as the unique key
}

export default upsertSchema
