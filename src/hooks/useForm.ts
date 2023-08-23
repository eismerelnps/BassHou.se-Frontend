'use client'
//import { editProduct } from "@/actions/product";
import { useAppDispatch } from "@/hooks";
import { uiSetSearchText } from "@/reducers/uiSlice";
import { useRouter } from "next/navigation";
import { useState } from "react"
//import { useDispatch } from "react-redux";
/*

handle input change receives as parameter a event
desectructured as 'target' and 
set a new value to the state 


returns a array of values
  1st: State value
  2nd: a function for changing the state
*/
export const useForm = (initialState: any = {}) => {
    const dispatch = useAppDispatch()
    const [values, setValues] = useState(initialState);
    const router = useRouter();

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, type, value, checked } = e.target;
        //const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setValues({
            ...values,
            [name]: value,

        });
        dispatch(uiSetSearchText(value));
        router.refresh();
    };

    return [values, handleInputChange, reset];
};
