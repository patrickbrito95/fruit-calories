import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CardItem from "../../components/CardItem";
import Layout from "../Layout";
import { MoreInformation } from "./styles";

function ProductList() {
  const [fruits, setFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setSearch(true);
      try {
        const { data: response } = await axios.get(
          "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json"
        );
        setFruits(response);
      } catch (error) {
        console.error(error.message);
      }
      setSearch(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = fruits.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout valueInput={searchTerm} onChangeInput={handleChange}>
      <div className="cards">
        {search ? (
          <>
            {fruits.map((fruit) => (
              <CardItem img={fruit.photo} name={fruit.name}>
                <MoreInformation to={`/fruits/${fruit.name}`}>
                  Mais informações
                </MoreInformation>
              </CardItem>
            ))}
          </>
        ) : (
          <>
            {filteredItems.map((fruit) => (
              <CardItem img={fruit.photo} name={fruit.name}>
                <MoreInformation to={`/fruits/${fruit.name}`}>
                  Mais informações
                </MoreInformation>
              </CardItem>
            ))}
          </>
        )}
      </div>
      <Outlet />
    </Layout>
  );
}

export default ProductList;
