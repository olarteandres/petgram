import React from "react";
import { useGetFavorites } from "../Conteiner/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return "loading...";
  if (error) return "error";

  return (
    <>
      <Layout
        title="Tus favoritos"
        subtitle="Aquí puedes encontrar tus favoritos"
      ></Layout>
      <ListOfFavs favs={data.favs} />
    </>
  );
};
