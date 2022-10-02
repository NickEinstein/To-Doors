export function providesTags(resultsWithIds, tagType, options = {}) {
  const { selectId = ({ id }) => id } = options;
  const listTag = { type: tagType, id: "LIST" };
  const result = resultsWithIds
    ? [
        listTag,
        ...resultsWithIds.map((result) => ({
          type: tagType,
          id: selectId(result || {}) || "ITEM",
        })),
      ]
    : [listTag];

  return result;
}

export function invalidatesTags(tagType, options = {}) {
  const { ids = [] } = options;
  const result = [
    { type: tagType, id: "LIST" },
    ...ids.map((id) => ({ type: tagType, id })),
  ];

  return result;
}
