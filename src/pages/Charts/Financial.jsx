import React from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const Financial = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data + "data");
  return (
    <div>Financial</div>
  )
}

export default Financial