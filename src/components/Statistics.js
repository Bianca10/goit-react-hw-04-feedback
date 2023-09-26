import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistici</h2>
      <p>Bun: {good}</p>
      <p>Neutru: {neutral}</p>
      <p>Rău: {bad}</p>
      <p>Total: {total}</p>
      <p>Procentaj feedback pozitiv: {positivePercentage}%</p>
    </div>
  );
}
