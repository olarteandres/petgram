import React from "react";
import { Layout } from "../components/Layout";


import { ListOfCategories } from "../components/ListOffCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCard";

export const Home = ({ categoryId }) => {
  return (
    <>
      <Layout title='Petgram 🐶,tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'/>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};
