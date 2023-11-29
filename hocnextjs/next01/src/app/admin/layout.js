const AdminLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Admin Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Admin Footer</h1>
      </footer>
    </div>
  );
};

export default AdminLayout;
