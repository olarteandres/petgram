import React from "react";
import { useQuery, gql } from "@apollo/client";

import { PhotoCard } from "../components/PhotoCard";

export const useGetSinglePhoto = (id) => {
  const getSinglePhoto = gql`
    query getSinglePhoto($id:ID!) {
      photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const { loading, error, data } = useQuery(getSinglePhoto, {variables: { id }})

return { loading, error, data }
}

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data, error } = useGetSinglePhoto(id)

  if (loading) return "Loading"
  if (error) return <h1>Error</h1>

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

