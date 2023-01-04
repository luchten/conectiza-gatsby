import React from 'react';
import HeadlessCard from '../components/HeadlessCard';
import SolucaoCard from '../components/SolucaoCard';

function createHeadlessCard(card) {
  return (
    <HeadlessCard
      key={card.key}
      classes={card.classes}
      src={card.src}
      alt={card.alt}
      content={card.content}
    />
  );
}

function createSolucaoCard(card) {
  return (
    <SolucaoCard
      key={card.key}
      classes={card.classes}
      src={card.src}
      alt={card.alt}
      title={card.title}
      content={card.content}
    />
  );
}

export { createHeadlessCard, createSolucaoCard };