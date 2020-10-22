import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import GoodsForm from "./GoodsForm";
import goodsStore from "../stores/goodsStore";
import actionTypes from "../actions/actionTypes";
import * as goodsActions from "../actions/goodsActions";

// Проверка на пустой объект-запись...
// Зачетный язык, в котором нет встроенной проверки ОСНОВНОГО типа данных!!!
// В инете приведено 15!!! способов проверки пустоты {} даже тесты скорости проведены!!!
// Я просто в шоке! :-)
const isEmpty = (object) => {
   // eslint-disable-next-line no-restricted-syntax, guard-for-in, no-empty-pattern
   for (const i in object) return false;
   return true;
};

const ManageGoodsPage = ({ match, history }) => {
   const [goods, setGoods] = useState({});

   const goodsArrived = (parGoods) => setGoods(parGoods);

   useEffect(() => {
      const tempToken = match.params.token;
      if (tempToken) {
         goodsStore.once(`${actionTypes.GOODS_FIND_BY_URL_ARRIVED}[${tempToken}]`, goodsArrived);

         goodsActions.getGoodsByURL(tempToken);
      }
   }, [match.params.token]);

   const handleSubmit = (event) => {
      event.preventDefault();

      goodsActions.saveGoods({
         id: event.target.id.value,
         code: event.target.code.value,
         url: event.target.url.value,
         name: event.target.name.value,
         categories: [event.target.categories.value],
         brand: event.target.brand.value,
         vendor: event.target.vendor.value,
         prices: { base: event.target.prices.value },
         measures: { weight: event.target.weight.value, volume: event.target.volume.value },
      });
      history.push("/goods");
      toast.success("Яство сохранено.");
   };

   // НЕ создаем здоровую пустую форму, если ждем загрузки данных из базы...
   if (match.params.token && isEmpty(goods)) {
      return <h2>Данные загружаются...</h2>;
   }
   return (
      <div>
         <h2>Редактировать яство</h2>
         <GoodsForm goods={goods} onSubmit={handleSubmit} />
      </div>
   );
};

export default ManageGoodsPage;
