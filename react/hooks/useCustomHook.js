// --------------------------------------------------------------------
// useFetchData.js

import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchData(URL = "", params = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isSubscribe = true;

    (async function fetchData() {
      try {
        const response = await axios.get(URL, params);
        if (isSubscribe && response.status === 200) {
          setData(response.data || null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        isSubscribe && setIsLoading(false);
      }
    })();

    return () => (isSubscribe = false);
  }, []);
  return { isLoading, data };
}
// export default useFetchData;

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// UserCard.js
import React from "react";
import useFetchData from "./hooks/useFetchData";

function UserCard() {
  const { isLoading, data: userInfo } = useFetchData(
    "https://5f3fda1244212d0016fed4db.mockapi.io/users/1"
  );

  return (
    <>
      {isLoading ? (
        <div> Loading ... </div>
      ) : userInfo ? (
        <div>
          <h2>Thông tin User</h2>
          <p>Họ tên: {userInfo.fullName}</p>
          <p>Tuổi: {userInfo.age}</p>
          <p>Địa chỉ: {userInfo.address}</p>
          <p>Số điện thoại: {userInfo.phone}</p>
        </div>
      ) : (
        <div>Không thể lấy thông tin user</div>
      )}
    </>
  );
}
// export default UserCard;

// ------------------------------------------------------------------------
