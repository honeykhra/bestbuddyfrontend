import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/shared/Slider/Slider";
import { fetchPropertiesByCategory } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import SliderCard from "../../components/Card/SliderCard";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryname = "" } = useParams();

  useEffect(() => {
    dispatch(fetchPropertiesByCategory(categoryname));
  }, []);

  const properties = useSelector(
    (state) => state.property.propertiesBycategory
  );

  return (
    <>
      <Navbar />
      <div className="categorypage">
        <h2>Category / {categoryname}</h2>
        <Slider properties={properties} />
      </div>
      <Footer />
    </>
  );
};

export default Category;
