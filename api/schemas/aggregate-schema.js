import S from 'fluent-schema'

const aggregateSchema = {
  body: S.object()
    .prop('collection', S.string()
      .required())
    .prop('pipeline', S.array()
      .items(S.object())
      .required())
}

export default aggregateSchema
