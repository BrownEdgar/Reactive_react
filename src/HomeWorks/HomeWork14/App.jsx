import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.scss"
import Goods from "./Goods/Goods"
import {nanoid} from "nanoid"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { string, object, number } from "yup"


export default function App() {
  const [goods, setGoods] = useState([])
  const [edit, setEdit] = useState(null)
  
  const validationSchema = object({
    title: string().min(3).max(15).required("Important!"),
    desc: string().min(3).max(15).required("Important!"),
    price: number().min(3).required("Important!"),

  });

  const getGoods = () => {
    axios("http://localhost:3000/goods")
      .then(res => setGoods(res.data))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/goods/${id}`)
      .then(getGoods())
  }
  const updatePost = (e) => {
    const {title, desc, price} = e.target;
    const goods = {
      title: title.value,
      desc: desc.value,
      price: price.value
    }

    axios.patch(`http://localhost:3000/goods/${edit}`, goods)
      .then(getGoods())
  }

  useEffect(() => {
    getGoods()
  }, [])
  
  const handleEdit = (id) => {
    setEdit(id)
  }

  const handleSubmit = (values, formik) => {
    const goods = {
      id: nanoid(5),
      ...values
    }
    axios.post("http://localhost:3000/goods/", goods)
    formik.resetForm()
  }

  return (
    <div className='App'>
      <h1 className='App__title'>Choose Your Sofa</h1>
      <div className="App__sell">
      
        <div className="App__form">
          <h2>Sell your Sofa</h2>
          <Formik
            onSubmit={handleSubmit}
            initialValues={
              { title: "", desc: "", price: "" }
            }
            validationSchema={validationSchema}
          >
            {
              (formik) => {
                return (
                  <Form className='form' >
                    <div className="form__group">
                      <label htmlFor="title">Tile</label>
                      <Field type="text" name="title" required />
                      <ErrorMessage name="title" component="p" />
                    </div>
                    <div className="form__group">
                      <label htmlFor="desc">Desctription</label>
                      <Field type="text" name='desc' />
                      <ErrorMessage name="desc" component="p" required />
                    </div>
                    <div className="form__group">
                      <label htmlFor="price">Price</label>
                      <Field type="text" name='price' required />
                      <ErrorMessage name="price" component="p" />
                    </div>
                    <input type="submit" value="SELL" className='form__sell' />
                  </Form>
                )
              }
            }
          </Formik>
        </div>
      </div>

      <div className="App__Goods">
        {
          goods.map((goods) => {
            return (
              <div className='Goods' key={goods.id}>
                <span onClick={() => handleDelete(goods.id)}><i className="bi bi-x-square-fill" ></i></span>
                <div className="Goods__sofa">
                  <img src={goods.image} alt="" className='Goods__img'/>
                  {
                    edit === goods.id ? (
                      <form className='Edit__form' onSubmit={updatePost}>
                        <div className='Edit__inputs'>
                          <input type="text" name='title'/>
                          <input type="text" name='price' />
                        </div>
                        <textarea name="desc"  cols="50" rows="10"></textarea>
                       <div>
                          <button onClick={() => setEdit(null)}>cancle</button>
                          <button>save</button>
                       </div>
                      </form>
                    ) : (
                        <div className="Goods__content">
                          <div className="Goods__textAndPrice">
                            <b>{goods.title}</b>
                            <p className='Goods__price'>{goods.price}</p>
                          </div>
                          <div className="Goods__desc">
                            <p>{goods.desc}</p>
                          </div>
                        </div>
                    )
                  }
                  <div className="Goods__edit">
                    <span onClick={() => handleEdit(goods.id)}><i className="bi bi-pen"></i></span>
                  </div>
              </div>
            </div>
            )
        })
        }
      </div>
    </div>
  )
}
