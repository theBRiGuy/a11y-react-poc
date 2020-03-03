import React from 'react';
import '../GlobalNavigation/GlobalNavigation'

function Header () {
  return (
    <>
      <a className="skip-link" id="skip-to-main" href="#skip-to-nav" tabIndex="0">Skip navigation menu</a>
      <header className="global-header" data-component="global-header">
        <a className="global-header__logo" href="/index.html">
          <span className="global-header__site-icon" aria-hidden="true">A</span>
          <h1 className="global-header__site-name" aria-label="the accessible e store">
            The <br />Accessible <br />eStore
          </h1>
        </a>
        <div className="global-header__mobile-toggles">
          <button className="btn btn--mobile btn--mobile-search" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="search" aria-label="search">
            Search
            <svg className="icon icon--menu-btn">
              <use xlinkHref="/assets/sprite.svg#search"></use>
            </svg>
          </button>
          <button className="btn btn--mobile btn--menu-toggle" data-js="hamburger-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu" aria-label="Navigation">
            Menu
            <svg className="icon icon--menu-btn">
              <use xlinkHref="/assets/sprite.svg#menu"></use>
            </svg>
          </button>
        </div>

        <form action="" id="global-header__search-form" className="global-header__search-form">
          <label htmlFor="global-header__search-input">Search</label>
          <input type="text" id="global-header__search-input" className="global-header__search-input" />
          <button className="global-header__search-btn" data-modal-show="construction-modal">
            <span className="sr-only">Search</span>
            <svg className="icon icon--search-btn">
              <use xlinkHref="/assets/sprite.svg#search"></use>
            </svg>
          </button>
        </form>

        <nav className="primary-nav" aria-label="Primary" data-js="hamburger-dropdown">
          <ul className="primary-nav__items">
            <li className="primary-nav__item has-submenu">
              <button className="primary-nav__heading" id="main-nav-women" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Women
                <svg className="icon icon--chevron">
                  <use xlinkHref="/assets/sprite.svg#chevron"></use>
                </svg>
              </button>
              <ul className="primary-nav__submenu">
                <li className="submenu-item">
                  <a href="/plp/index.html">Womens</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Tops</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Pants</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Dresses</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Shoes</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Hats</a>
                </li>
              </ul>
            </li>
            <li className="primary-nav__item has-submenu">
              <button className="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Men
                <svg className="icon icon--chevron">
                  <use xlinkHref="/assets/sprite.svg#chevron"></use>
                </svg>
              </button>
              <ul className="primary-nav__submenu">
                <li className="submenu-item">
                  <a href="/plp/index.html">Mens</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Tops</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Pants</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Kilts</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Shoes</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Hats</a>
                </li>
              </ul>
            </li>
            <li className="primary-nav__item has-submenu">
              <button className="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Girls
                <svg className="icon icon--chevron">
                  <use xlinkHref="/assets/sprite.svg#chevron"></use>
                </svg>
              </button>
              <ul className="primary-nav__submenu">
                <li className="submenu-item">
                  <a href="/plp/index.html">Girls</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Tops</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Pants</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Dresses</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Shoes</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Hats</a>
                </li>
              </ul>
            </li>
            <li className="primary-nav__item has-submenu">
              <button className="primary-nav__heading" data-js="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Boys
                <svg className="icon icon--chevron">
                  <use xlinkHref="/assets/sprite.svg#chevron"></use>
                </svg>
              </button>
              <ul className="primary-nav__submenu">
                <li className="submenu-item">
                  <a href="/plp/index.html">Boys</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Tops</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Pants</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Dresses</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Shoes</a>
                </li>
                <li className="submenu-item">
                  <a href="/plp/index.html">Hats</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="secondary-nav" aria-label="Secondary" data-js="hamburger-dropdown">
          <ul className="secondary-nav__items">
            <li className="secondary-nav__item">
              <button className="secondary-nav__button" data-modal-show="construction-modal">
                <svg className="icon icon--menu-btn">
                  <use xlinkHref="/assets/sprite.svg#account"></use>
                </svg> Account
              </button>
            </li>
            <li className="secondary-nav__item secondary-nav__mini-cart mini-cart__toggle" data-component="mini-cart">
              <button aria-label="Mini Cart, 0 items" data-js="mini-cart-toggle" className="secondary-nav__button" aria-haspopup="true" aria-expanded="false">
                <span aria-live="assertive" aria-atomic="true" className="element-invisible mini-cart__aria">You have 0 items in
                  your cart.</span>
                <svg className="icon icon--menu-btn">
                  <use xlinkHref="/assets/sprite.svg#cart"></use>
                </svg>
                Cart
                <span className="mini-cart__visible-label--amount" data-js="cart-item-count">0</span>
              </button>
              <div data-template="mini-cart"></div>
            </li>
            <li className="secondary-nav__item secondary-nav__stores">
              <button className="secondary-nav__button" data-modal-show="construction-modal">
                <svg className="icon icon--menu-btn">
                  <use xlinkHref="/assets/sprite.svg#stores"></use>
                </svg> Stores
              </button>
            </li>
            <li className="secondary-nav__item secondary-nav__contact">
              <button className="secondary-nav__button" data-modal-show="construction-modal">
                <svg className="icon icon--menu-btn">
                  <use xlinkHref="/assets/sprite.svg#contact"></use>
                </svg> Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <a className="skip-link" id="skip-to-nav" href="#skip-to-main" tabIndex="0">Return to navigation menu</a>
    </>
  )
}

export default Header;