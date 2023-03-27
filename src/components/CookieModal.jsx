import React from 'react'
import '../styles/cookieModal.css'

export default function CookieModal() {
  return (
    <div className='cookie-window'>
        <p>Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdo.</p>
        <p>Ao utilizar este site, você concorda com o uso de cookies.</p>
        <button>Ok, entendi</button>
    </div>
  )
}
