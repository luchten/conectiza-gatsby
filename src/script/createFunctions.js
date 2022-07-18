import React from 'react';
import HeadlessCard from '../components/HeadlessCard';
import SolucaoCard from '../components/SolucaoCard';
import Marcas from '../components/Marcas';

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

function createMarcas(marca) {
  return (
      <Marcas key={marca.key} src={marca.src} alt={marca.alt}/>    
  );
}

export { createHeadlessCard, createSolucaoCard, createMarcas };