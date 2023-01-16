import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import Register from "./Register";
import price from "./price";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const SCOrderDiv = styled.div`
max-width:800px;
box-sizing=border-box;
display:${(props) => (props.orderBoolean ? "block" : "none")}
`;

const SCFixSen = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  text-align: center;
`;

const SCFixExp = styled.p`
  margin-left: 3rem;
  font-size: 1.25rem;
`;

const SCFixImg = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const SCOrderForm = styled.form``;

const SCLabel = styled.label`
  display: block;
  background: rgb(180, 180, 180);
  padding: 1rem 0rem 1rem 2rem;
`;

const SCSelect = styled.select`
  display: block;
  padding: 0.5rem;
  width: 40%;
  margin: 1rem 2rem;
`;

const SCIngredients = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`;

const SCInput = styled.input``;

const SCRadioDiv = styled.div`
  margin: 1rem 2rem;
  line-height: 2.5;
`;

const SCCheckboxDiv = styled.div`
  margin: 1rem 2rem;
  line-height: 2.5;

  @media (max-width: 450px) {
    margin: 0rem 2rem;
  }
`;

const SCNoteInput = styled.input`
  margin: 1rem 2rem;
  width: 40%;
  padding: 1rem 0.5rem;

  @media (max-width: 450px) {
    width: 70%;
  }
`;

const SCSubmitDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;

  @media (max-width: 550px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`;

const SCButton = styled.button`
  margin: 1rem 2rem;
  width: 40%;
  padding: 0.5rem 0.5rem;
  display: block;

  @media (max-width: 550px) {
    width: 90%;
    margin: 1rem auto;
    min-width: 10rem;
  }
`;

const SCNumber = styled.input`
  margin: 1rem 2rem;
  width: 40%;
  max-width: 10rem;
  padding: 0.5rem 0.5rem;
  display: block;

  @media (max-width: 550px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

const dummyOrder = {
  name: "",
  size: "Select",
  sauce: "",
  ingredients: [],
  gluten: false,
  note: "",
  quantity: 1,
};

const dummyError = {
  name: "",
  size: "",
  sauce: "",
  ingredients: "",
  gluten: "",
  note: "",
  quantity: "",
};

const dummyRegister = {
  name: "",
  size: "",
  sauce: "",
  ingredients: [],
  gluten: false,
  note: "",
  quantity: 0,
  createdAt: "",
  id: 0,
};

const charNum = 2;
const minIngredient = 4;
const maxIngredient = 10;

const Order = (props) => {
  const [order, setOrder] = useState(dummyOrder);
  const [errors, setErrors] = useState(dummyError);
  const [registerOrder, setRegisterOrder] = useState(dummyRegister);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderBoolean, setOrderBoolean] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(charNum, "At least, there must be 2 characs.")
      .matches(" ", "Please, enter your name and surname."),
    size: yup.string().required("Please, select your pizza size."),
    sauce: yup.string().required("Please, select your sauce"),
    ingredients: yup
      .array()
      .min(minIngredient, "Please, select 4 different ingredients at least")
      .max(maxIngredient, "Please, select 10 different ingredients at most"),
    gluten: yup.boolean(),
    note: yup.string(),
    quantity: yup
      .number()
      .positive("Please, select right quantity")
      .required("Please, select quantity"),
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/orders", order)
      .then((response) => {
        setRegisterOrder(response.data);
        setOrderBoolean(false);
        setTimeout(() => {
          setOrderBoolean(true);
          setRegisterOrder(dummyRegister);
          setOrder(dummyOrder);
        }, 4000);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    let newPrice =
      (price[order.size] +
        price[order.sauce] +
        price.ingredients * order.ingredients.length) *
      order.quantity;
    if (order.gluten) newPrice = newPrice * price.gluten;
    console.log(newPrice);
    setOrderPrice(newPrice);
  }, [order]);

  useEffect(() => {
    formSchema
      .isValid(order)
      .then((response) => setSubmitDisabled(!response))
      .catch((err) => console.log(err));
  }, [order]);

  function orderValidation(name, value) {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
        console.log("Yup okey");
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
        console.log("Yup hatalı", errors);
      });
  }

  function handleChange(event) {
    console.log("buradayım0");
    let newValue = event.target.value;
    let newArray = [...order.ingredients];
    if (event.target.name === "ingredients") {
      newArray.indexOf(event.target.value) !== -1
        ? newArray.splice(newArray.indexOf(event.target.value), 1)
        : newArray.push(event.target.value);
      orderValidation(event.target.name, newArray);
      setOrder({ ...order, ingredients: newArray });
    } else if (event.target.name === "gluten") {
      orderValidation(event.target.name, !order.gluten);
      setOrder({ ...order, [event.target.name]: !order.gluten });
    } else {
      console.log(newValue + " " + price[newValue]);
      orderValidation(event.target.name, newValue);
      setOrder({ ...order, [event.target.name]: newValue });
    }
  }

  console.log(order);

  return (
    <>
      <SCOrderDiv orderBoolean={orderBoolean}>
        <SCFixSen>Build Your Own Pizza</SCFixSen>
        <SCFixImg src="https://rare-gallery.com/uploads/posts/820554-Fast-food-Pizza-Tomatoes-Wood-planks-Foliage-Basil.jpg" />
        <SCFixExp data-cy="order-fix-exp">Build your own pizza</SCFixExp>
        <SCOrderForm onSubmit={handleSubmit}>
          <SCLabel htmlFor="name">
            Please enter your name{" "}
            <span style={{ fontWeight: "bold" }}>(Required)</span>
          </SCLabel>
          <SCNoteInput
            type="text"
            id="name"
            name="name"
            value={order.name}
            data-cy="name-input"
            placeholder="Please enter your name properly"
            onChange={handleChange}
          ></SCNoteInput>
          <SCLabel htmlFor="size">
            Choice of size{" "}
            <span style={{ fontWeight: "bold" }}>(Required)</span>
          </SCLabel>
          <SCSelect
            name="size"
            id="size"
            placeholder="Select pizza size"
            value={order.size}
            onChange={handleChange}
            data-cy="select-input"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option data-cy="Large" value="Large">
              Large
            </option>
            <option value="Extra-Large">Extra-Large</option>
            <option value="King-Size">King-Size</option>
          </SCSelect>

          <SCLabel htmlFor="sauce">
            Choice of Sauce (only one sauce){" "}
            <span style={{ fontWeight: "bold" }}>(Required)</span>
          </SCLabel>

          <SCRadioDiv>
            <SCInput
              type="radio"
              id="pesto"
              name="sauce"
              onClick={handleChange}
              value="pesto"
              checked={order.sauce === "pesto"}
            ></SCInput>
            <label htmlFor="pesto">Pesto Sauce</label>
            <br />
            <SCInput
              type="radio"
              id="creamy-alfredo"
              name="sauce"
              value="alfredo"
              data-cy="alfredo"
              checked={order.sauce === "alfredo"}
              onClick={handleChange}
            ></SCInput>
            <label htmlFor="creamy-alfredo">Creamy Alfredo Sauce</label>
            <br />
            <SCInput
              type="radio"
              id="bbq"
              name="sauce"
              value="bbq"
              checked={order.sauce === "bbq"}
              onClick={handleChange}
            ></SCInput>
            <label htmlFor="bbq">BBQ Sauce</label>
            <br />
            <SCInput
              type="radio"
              id="ranch"
              name="sauce"
              value="ranch"
              checked={order.sauce === "ranch"}
              onClick={handleChange}
            ></SCInput>
            <label htmlFor="ranch">Ranch Sauce</label>
            <br />
            <SCInput
              type="radio"
              id="hummus"
              name="sauce"
              value="hummus"
              checked={order.sauce === "hummus"}
              onClick={handleChange}
            ></SCInput>
            <label htmlFor="hummus">Hummus Sauce</label>
            <br />
          </SCRadioDiv>
          <SCLabel htmlFor="ingredients">
            Add extra ingredients{" "}
            <span style={{ fontWeight: "bold" }}>(Required)</span>
          </SCLabel>
          <SCIngredients>
            <SCCheckboxDiv>
              <SCInput
                type="checkbox"
                id="pepperoni"
                name="ingredients"
                value="pepperoni"
                data-cy="pepperoni"
                checked={order.ingredients.includes("pepperoni")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="pepperoni">Pepperoni</label>
              <br />
              <SCInput
                type="checkbox"
                id="bacon"
                name="ingredients"
                value="bacon"
                data-cy="bacon"
                checked={order.ingredients.includes("bacon")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="bacon">Bacon</label>
              <br />
              <SCInput
                type="checkbox"
                id="ham"
                name="ingredients"
                value="ham"
                data-cy="ham"
                checked={order.ingredients.includes("ham")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="ham">Ham</label>
              <br />
              <SCInput
                type="checkbox"
                id="meatballs"
                name="ingredients"
                value="meatballs"
                data-cy="meatballs"
                checked={order.ingredients.includes("meatballs")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="meatballs">Meatballs</label>
              <br />
              <SCInput
                type="checkbox"
                id="italianSausage"
                name="ingredients"
                value="italianSausage"
                checked={order.ingredients.includes("italianSausage")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="italianSausage">Italian sausage</label>
              <br />
              <SCInput
                type="checkbox"
                id="prosciutto"
                name="ingredients"
                value="prosciutto"
                checked={order.ingredients.includes("prosciutto")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="prosciutto">Prosciutto</label>
              <br />
              <SCInput
                type="checkbox"
                id="salami"
                name="ingredients"
                value="salami"
                checked={order.ingredients.includes("salami")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="salami">Salami</label>
              <br />
              <SCInput
                type="checkbox"
                id="chicken"
                name="ingredients"
                value="chicken"
                checked={order.ingredients.includes("chicken")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="chicken">Chicken</label>
              <br />
              <SCInput
                type="checkbox"
                id="beef"
                name="ingredients"
                value="beef"
                checked={order.ingredients.includes("beef")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="beef">Beef</label>
              <br />
              <SCInput
                type="checkbox"
                id="seafood"
                name="ingredients"
                value="seafood"
                checked={order.ingredients.includes("seafood")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="seafood">Seafood</label>
              <br />
            </SCCheckboxDiv>

            <SCCheckboxDiv>
              <SCInput
                type="checkbox"
                id="mushroom"
                name="ingredients"
                value="mushroom"
                checked={order.ingredients.includes("mushroom")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="mushroom">Mushroom</label>
              <br />
              <SCInput
                type="checkbox"
                id="pickle"
                name="ingredients"
                value="pickle"
                checked={order.ingredients.includes("pickle")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="pickle">Pickle</label>
              <br />
              <SCInput
                type="checkbox"
                id="cheese"
                name="ingredients"
                value="cheese"
                checked={order.ingredients.includes("cheese")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="cheese">Cheese</label>
              <br />
              <SCInput
                type="checkbox"
                id="olive"
                name="ingredients"
                value="olive"
                checked={order.ingredients.includes("olive")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="olive">Olive</label>
              <br />
              <SCInput
                type="checkbox"
                id="pepper"
                name="ingredients"
                value="pepper"
                checked={order.ingredients.includes("pepper")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="pepper">Pepper</label>
              <br />
              <SCInput
                type="checkbox"
                id="sesame"
                name="ingredients"
                value="sesame"
                checked={order.ingredients.includes("sesame")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="sesame">Sesame</label>
              <br />
              <SCInput
                type="checkbox"
                id="corn"
                name="ingredients"
                value="corn"
                checked={order.ingredients.includes("corn")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="corn">Corn</label>
              <br />
              <SCInput
                type="checkbox"
                id="basil"
                name="ingredients"
                value="basil"
                checked={order.ingredients.includes("basil")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="basil">Basil</label>
              <br />
              <SCInput
                type="checkbox"
                id="tomato"
                name="ingredients"
                value="tomato"
                checked={order.ingredients.includes("tomato")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="tomato">Tomato</label>
              <br />
              <SCInput
                type="checkbox"
                id="onion"
                name="ingredients"
                value="onion"
                checked={order.ingredients.includes("onion")}
                onClick={handleChange}
              ></SCInput>
              <label htmlFor="onion">Onion</label>
              <br />
            </SCCheckboxDiv>
          </SCIngredients>

          <SCLabel htmlFor="gluten">Choice of substitute</SCLabel>
          <SCCheckboxDiv>
            <SCInput
              type="checkbox"
              id="gluten"
              name="gluten"
              value="gluten"
              data-cy="gluten"
              checked={order.gluten}
              onClick={handleChange}
            ></SCInput>
            <label htmlFor="gluten">Gluten Free Crust (%100)</label>
            <br />
          </SCCheckboxDiv>
          <div style={{ borderBottom: "0.1rem solid black" }}>
            <SCLabel htmlFor="note">Special Instructions</SCLabel>
            <SCNoteInput
              type="text"
              id="note"
              name="note"
              value={order.note}
              data-cy="note-input"
              placeholder="Anything else you would like to add?"
              onChange={handleChange}
            ></SCNoteInput>
          </div>

          <SCSubmitDiv>
            <SCNumber
              type="number"
              value={order.quantity}
              onChange={handleChange}
              name="quantity"
              data-cy="quantity-input"
              min="1"
            ></SCNumber>
            <SCButton data-cy="submit" disabled={submitDisabled} type="submit">
              Add to Order $ {orderPrice ? orderPrice : 0}
            </SCButton>
          </SCSubmitDiv>
        </SCOrderForm>
      </SCOrderDiv>
      <Register data={registerOrder} orderBoolean={orderBoolean}></Register>
    </>
  );
};

export default Order;
