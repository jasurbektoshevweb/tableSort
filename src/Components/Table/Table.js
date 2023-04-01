import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
function Table() {
  const [modal, setModal] = useState(false);
  const [inputNumber, setInputNumber] = useState('');
  const [dataIndex, setDataIndex] = useState();
  const [toggleTd, setToggleTd] = useState("")
  const [tableData, setDataTable] = useState([
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 5,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "red",
    },
    {
      tdName:
        "Собирать схемы технологических устройств и проверять их работоспособность",
      tdTitle_1: 0,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "green",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 0,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "yellow",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 0,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "grey",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 0,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "blue",
    },
    {
      tdName:
        "Подбирать технологическое оборудование для ремонта и эксплуатации электрооборудования",
      tdTitle_1: 0,
      tdTitle_2: 3,
      tdTitle_3: 0,
      tdTitle_4: 6,
      tdTitle_5: 8,
      tdColor: "black",
    },
  ]);

  const toggle = () => setModal(!modal);
  const toggleTD = (index, setNumber)=> {
    setDataIndex(index)
    setToggleTd(setNumber)
    setModal(!modal)
  }

  const getNumber = (event) => {
    setInputNumber(event.target.value);
  }

  const saveFunction = () =>{
    setModal(!modal)
    let newArr = [...tableData]; 
    newArr[dataIndex][toggleTd] = inputNumber;
    setDataTable(newArr);
  }
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Table Number</ModalHeader>
        <ModalBody>
          <div>
            <Input onChange={getNumber}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Bekor Qilish
          </Button>
          <Button color="primary" onClick={saveFunction}>
            Saqlash
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <div className="table-item">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Название</th>
              <th className="table-head">1</th>
              <th className="table-head">2</th>
              <th className="table-head">3</th>
              <th className="table-head">4</th>
              <th className="table-head">5</th>
              <th>color</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.tdName}</td>
                  <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                    {item.tdTitle_1}
                  </td>
                  <td className="table-head" onClick={() => toggleTD(index, "tdTitle_2")}>{item.tdTitle_2}</td>
                  <td className="table-head" onClick={() => toggleTD(index, "tdTitle_3")}>{item.tdTitle_3}</td>
                  <td className="table-head" onClick={() => toggleTD(index, "tdTitle_4")}>{item.tdTitle_4}</td>
                  <td className="table-head" onClick={() => toggleTD(index, "tdTitle_5")}>{item.tdTitle_5}</td>
                  <td className="color-bg">
                    <div className={item.tdColor}></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
