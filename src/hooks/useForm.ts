import { uiSetSearchText } from "@/reducers/uiSlice";
import { ReactHTML, useState } from "react"
import { useDispatch } from "react-redux";
/*

handle input change receives as parameter a event
desectructured as 'target' and 
set a new value to the state 


returns a array of values
  1st: State value
  2nd: a function for changing the state
*/
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch()

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.value;
    
    setValues({
      ...values,
      [target.name]: value,
     
    });
    dispatch( uiSetSearchText('testing'))
  };

  return [values, handleInputChange, reset];
};
