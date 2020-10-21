import React, { useState, useEffect } from "react";
import GoodsForm from "./GoodsForm";
import goodsStore from "../stores/goodsStore";
import { toast } from "react-toastify";
import actionTypes from "../actions/actionTypes";
import * as goodsActions from "../actions/goodsActions";

const ManageGoodsPage = (props) => {
   console.log("ManageGoodsPage: ", props);
   const [errors, setErrors] = useState({});
   const [goods, setGoods] = useState({});

   const goodsArrived = (goods) => setGoods(goods);

   useEffect(() => {
      goodsStore.addListener(actionTypes.GOODS_FIND_BY_CODE_ARRIVED, goodsArrived);

      goodsActions.getGoodsByCode(props.match.params.token);

      return () => goodsStore.removeListener(actionTypes.GOODS_FIND_BY_CODE_ARRIVED, goodsArrived);
   }, [props.match.params.token]);

   function formIsValid(formElements) {
      const _errors = {};

      if (!formElements.code.value) _errors.code = "Артикул нужно указать!";
      if (!formElements.name.value) _errors.name = "Название обязательно нужно!";
      if (!formElements.category.value) _errors.category = "Куда поместить?";
      if (!formElements.brand.value) _errors.brand = "Брэнд нужно указать!";
      if (!formElements.vendor.value) _errors.brand = "Поставщика нужно указать!";
      if (!formElements.prices.value) _errors.brand = "Цену нужно указать!";

      setErrors(_errors);
      // Form is valid if the errors object has no properties
      return Object.keys(_errors).length === 0;
   }

   function handleSubmit(event) {
      event.preventDefault();

      if (!formIsValid(event.target)) return;

      goodsActions.saveGoods(
         undefined,
         event.target.code.value,
         event.target.name.value,
         event.target.category.value,
         event.target.brand.value,
         event.target.vendor.value,
         event.target.prices.value,
         event.target.weight.value,
         event.target.volume.value
      );
      props.history.push("/goods");
      toast.success("Яство сохранено.");
   }

   console.log("123: ", goods);
   return (
      <>
         <h2>Редактировать яство</h2>
         <GoodsForm errors={errors} goods={goods} onSubmit={handleSubmit} />
      </>
   );
};

export default ManageGoodsPage;
