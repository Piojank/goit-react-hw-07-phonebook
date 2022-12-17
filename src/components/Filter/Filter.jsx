import React from "react";
import style from './Filter.module.css';
import { store } from "../../app/store";
import { setFilter } from "../../features/contacts";

export const Filter = () => {
        const onFilter = (e) => {
        store.dispatch(setFilter(e.target.value));
    };
    return (
    <div className={style.FilterContainer}>
        <label>
        Find contacts by name
        <input
            type="text"
            name="filter"
            className={style.FilterInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Find contacts by name"
            onChange={onFilter}
        />
        </label>
    </div>
    );
};