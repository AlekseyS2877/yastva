import React from "react";
import TextInput from "./common/TextInput";

const GoodsForm = ({ errors, goods, onSubmit }) => {
   return (
      <form onSubmit={onSubmit}>
         <TextInput
            id="code"
            label="Артикул"
            name="code"
            value={goods.code}
            error={errors.code || ""}
         />
         <TextInput
            id="name"
            label="Название"
            name="name"
            value={goods.name}
            error={errors.name || ""}
         />
         <div className="input-group mb-3">
            <TextInput
               id="category"
               label="Категория"
               name="category"
               value={goods.category}
               error={errors.category || ""}
            />
            <div className="form-group">
               <label htmlFor="brand">Бренд</label>
               <div className="field">
                  <select id="brand" name="brand" value={goods.brand} className="form-control">
                     <option value="" />
                     <option value="Delphi">Delphi</option>
                     <option value="Новый Афон">Новый Афон</option>
                     <option value="Anoskelli">Anoskelli</option>
                  </select>
               </div>
               {errors.brand && <div className="alert alert-danger">{errors.brand || ""}</div>}
            </div>
            <TextInput
               id="vendor"
               label="Продавец/Поставщик"
               name="vendor"
               value={goods.vendor}
               error={errors.vendor || ""}
            />
         </div>
         <div className="input-group mb-3">
            <TextInput
               id="weight"
               label="Вес (гр.)"
               name="weight"
               value={goods.weight}
               error={errors.weight || ""}
            />

            <TextInput
               id="volume"
               label="Объем (мл.)"
               name="volume"
               value={goods.volume}
               error={errors.volume || ""}
            />
         </div>
         <TextInput
            id="prices"
            label="Цены"
            name="prices"
            value={goods.prices}
            error={errors.prices || ""}
         />

         <input type="submit" value="Save" className="btn btn-primary" />
      </form>
   );
};

export default GoodsForm;
