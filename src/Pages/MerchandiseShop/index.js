import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  createNewMerchandise,
  deleteMerchandise,
  getShopItems,
} from "./ShopReducer";

import MerchandiseBox from "./MerchandiseBox";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

import "./style.scss";
import NewMerchandiseForm from "./NewMerchandiseForm";

const ShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shopData = useSelector((state) => state.persistedReducer.ShopReducer);
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  const [displayData, setDisplayData] = useState(shopData.itemList);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (shopData.status === "empty") {
      dispatch(getShopItems());
    }
  }, []);

  useEffect(() => {
    setDisplayData(shopData.itemList);
  }, [shopData]);

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = ({ File, ...rest }) => {
    const submitValues = {
      ...rest,
      PhotoUrl: File[0].response.photoUrl,
    };
    dispatch(createNewMerchandise(submitValues));
  };

  const handleDelete = (_id) => {
    dispatch(deleteMerchandise(_id));
  };

  return (
    <div className="shop-page">
      <div className="shop-page__title">
        <Header1>Merchandise Shop</Header1>
        <div className="shop-page__title__buttons">
          {userInfo.IsAdmin && (
            <div>
              <CustomButton onClick={() => setIsFormOpen(true)} type="button">
                Add New Item
              </CustomButton>
              <CustomButton
                onClick={() => setEditMode(!editMode)}
                type="button"
              >
                {editMode ? "Done Editing" : "Edit Shop"}
              </CustomButton>
            </div>
          )}
          <CustomButton onClick={() => navigate("/Cart")} type="button">
            My Cart
          </CustomButton>
          <CustomButton>My Orders</CustomButton>
        </div>
      </div>
      <div className="shop-page__merch-wrapper">
        {displayData ? (
          displayData.map((d) => (
            <MerchandiseBox
              data={d}
              key={d._id}
              editMode={editMode}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div />
        )}
      </div>
      <NewMerchandiseForm
        isOpen={isFormOpen}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ShopPage;
