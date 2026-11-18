interface NavbarProps {
  totalCartItems: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export default function Navbar({
  totalCartItems,
  onCartClick,
  onMenuClick
}: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={onMenuClick}>
        <span className="brand-icon">🍲</span>
        <span>Mchopify</span>
      </div>

      <div className="navbar-links">
        <button className="nav-menu-link" onClick={onMenuClick}>
          Menu
        </button>

        <button
          className="navbar-cart-button"
          onClick={onCartClick}
          aria-label={`Open cart, ${totalCartItems} items`}
        >
          <span>🛒</span>

          {totalCartItems > 0 && (
            <span className="cart-badge">{totalCartItems}</span>
          )}
        </button>
      </div>
    </nav>
  );
}