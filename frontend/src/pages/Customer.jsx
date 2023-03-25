import React from "react";

import CrudModule from "@/modules/CrudModule";
import CustomerForm from "@/forms/CustomerForm";

function Customer() {
  const entity = "client";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };

  const panelTitle = "Customer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["company"];

  const readColumns = [
    {
      title: "Franchise",
      dataIndex: "franchise_company",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "contact_no",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Marital Status",
      dataIndex: "marital_status",
    },
    {
      title: "Height",
      dataIndex: "height",
    },
    {
      title: "Weight",
      dataIndex: "weight",
    },
    {
      title: "Diet",
      dataIndex: "vegetarian",
    },
  ];
  const dataTableColumns = [
    {
      title: "Franchise",
      dataIndex: "franchise_company",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      title: "Surame",
      dataIndex: "surname",
    },
    {
      title: "Contact No",
      dataIndex: "contact_no",
    },
  ];

  const ADD_NEW_ENTITY = "Add new customer";
  const DATATABLE_TITLE = "customers List";
  const ENTITY_NAME = "customer";
  const CREATE_ENTITY = "Create customer";
  const UPDATE_ENTITY = "Update customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Customer;
