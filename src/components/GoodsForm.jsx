/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";

const GoodsForm = ({ goods, onSubmit }) => {
   return (
      <form className="needs-validation was-validated" noValidate onSubmit={onSubmit}>
         <input
            type="text"
            readOnly
            className="form-control-plaintext d-none"
            id="id"
            defaultValue={goods.id}
         />
         <div className="form-row">
            <div className="col-md-2 mb-3">
               <label htmlFor="code">Артикул</label>
               <input
                  type="text"
                  className="form-control"
                  id="code"
                  defaultValue={goods.code}
                  required
               />
               <div className="invalid-tooltip">Артикул обязателен!</div>
            </div>
            <div className="col-md-3 mb-3">
               <label htmlFor="url">URL</label>
               <input
                  type="text"
                  className="form-control"
                  id="url"
                  defaultValue={goods.url}
                  required
               />
               <div className="invalid-tooltip">URL обязателен!</div>
            </div>
            <div className="col-md-7 mb-3">
               <label htmlFor="name">Название</label>
               <div className="input-group">
                  <input
                     type="text"
                     className="form-control"
                     id="name"
                     defaultValue={goods.name}
                     required
                  />
                  <div className="invalid-tooltip">Название обязательно!</div>
               </div>
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-4 mb-3">
               <label htmlFor="categories">Категория</label>
               <div className="input-group">
                  <input
                     type="text"
                     className="form-control"
                     id="categories"
                     defaultValue={goods.categories}
                     required
                  />
                  <div className="input-group-append">
                     <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => {
                           console.log("Шмяк...");
                        }}
                     >
                        ...
                     </button>
                  </div>
                  <div className="invalid-tooltip">Категория обязательна!</div>
               </div>
            </div>
            <div className="col-md-4 mb-3">
               <label htmlFor="brand">Бренд</label>
               <div className="input-group">
                  <input
                     type="text"
                     className="form-control"
                     id="brand"
                     defaultValue={goods.brand}
                     required
                  />
                  <div className="input-group-append">
                     <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => {
                           console.log("Шмяк...");
                        }}
                     >
                        ...
                     </button>
                  </div>
                  <div className="invalid-tooltip">Бренд обязателен!</div>
               </div>
            </div>
            <div className="col-md-4 mb-3">
               <label htmlFor="vendor">Поставщик/Продавец</label>
               <div className="input-group">
                  <input
                     type="text"
                     className="form-control"
                     id="vendor"
                     defaultValue={goods.vendor}
                  />
                  <div className="input-group-append">
                     <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => {
                           console.log("Шмяк...");
                        }}
                     >
                        ...
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-4 mb-3">
               <label htmlFor="weight">Вес (гр.)</label>
               <input
                  type="text"
                  className="form-control"
                  id="weight"
                  defaultValue={goods.measures ? goods.measures.weight : ""}
               />
            </div>
            <div className="col-md-4 mb-3">
               <label htmlFor="volume">Объём (мл.)</label>
               <input
                  type="text"
                  className="form-control"
                  id="volume"
                  defaultValue={goods.measures ? goods.measures.volume : ""}
               />
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-4 mb-3">
               <label htmlFor="prices">Цены (руб.)</label>
               <input
                  type="text"
                  className="form-control"
                  id="prices"
                  defaultValue={goods.prices ? goods.prices.base : ""}
                  required
               />
               <div className="invalid-tooltip">Цена обязательна!</div>
            </div>
         </div>
         <button className="btn btn-primary" type="submit">
            Сохранить изменения!
         </button>
      </form>
   );
};

/* return (
      <form onSubmit={onSubmit}>
         <div className="input-group mb-3">
            <TextInput
               id="code"
               label="Артикул"
               name="code"
               value={goods.code}
               error={errors.code || ""}
            />
            <TextInput id="url" label="URL" name="url" value={goods.url} error={errors.url || ""} />
         </div>
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
               value={goods.categories}
               error={errors.categories || ""}
            />
            <div className="form-group">
               <label htmlhtmlFor="brand">Бренд</label>
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
               value={goods.measures ? goods.measures.weight : ""}
               error={errors.weight || ""}
            />

            <TextInput
               id="volume"
               label="Объем (мл.)"
               name="volume"
               value={goods.measures ? goods.measures.volume : ""}
               error={errors.volume || ""}
            />
         </div>
         <TextInput
            id="prices"
            label="Цены"
            name="prices"
            value={goods.prices ? goods.prices.base : ""}
            error={errors.prices || ""}
         />

         <input type="submit" value="Save" className="btn btn-primary" />
      </form>
   );
}; */

export default GoodsForm;
